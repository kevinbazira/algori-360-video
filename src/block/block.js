/**
 * BLOCK: algori-360-video
 *
 * Algori 360 Video is a Gutenberg Block Plugin that enables you add interactive 360° videos to your WordPress website.
 */

/**
 * WordPress dependencies
 */
const { 
	PanelBody,
	TextControl,  
	Spinner,
	withNotices,
	Notice } = wp.components; // import { PanelBody, RangeControl, ToggleControl, withNotices } from '@wordpress/components';
const { Fragment } = wp.element; // import { Fragment } from '@wordpress/element';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaPlaceholder,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck,
	AlignmentToolbar,
	RichText, 
} = wp.blockEditor; // Import * from @wordpress/blockEditor 
const { isBlobURL } = wp.blob;


/**
 * Internal dependencies
 *
 * Import CSS.
 */
import './style.scss';
import './editor.scss';


/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'video' ];


const blockAttributes = {
	title: {
		type: 'array',
		source: 'children',
		selector: 'p',
	},
	url: {
		type: 'string',
	},
	align: {
		type: 'string',
	},
	widthBeforeWideFullAlignments: {
		type: 'number',
		default: 600,
	},
	width: {
		type: 'number',
		default: 600,
	},
	height: {
		type: 'number',
		default: 300,
	},
	contentAlign: {
		type: 'string',
		default: 'center',
	},
	id: {
		type: 'number',
	},
};

/**
 * Cater for block categories in older versions of WordPress i.e < WP 5.5
 */
const hasFormattingCategory = wp.blocks.getCategories().some( function( category ) {
	return category.slug === 'common';
} );

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'algori-360-video/block-algori-360-video', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	
	title: __( '360° Video' ), // Block title.
	
	description: __( 'Embed a 360° video file with a simple play/pause button.' ),  // Block description that appears in the block inspector. Make it short preferably.
	
	icon: 'format-video', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	
	category: hasFormattingCategory ? 'common' : 'media', // Block category — Group blocks together based on common traits E.g. text, media, design, widgets, embeds, reusable.
	
	keywords: [ // Block search keywords
		__( 'algori panorama video - three sixty degree video' ), 
		__( 'spherical video - full-sphere video' ), 
		__( 'equirectangular video - VR (Virtual Reality) videography' ), 
	],
	
	example: {
		attributes: {
			url: '../wp-content/plugins/algori-360-video/360-video-example.mp4',
		},
	},
	
	attributes: blockAttributes,  // Block attributes for editing in the block inspector.
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: withNotices( ( { attributes, setAttributes, isSelected, className, noticeOperations, noticeUI } ) => {
		
		const { url, title, align, widthBeforeWideFullAlignments, width, height, contentAlign, id } = attributes;
		const updateWidth = ( width ) => setAttributes( { width: parseInt( width, 10 ), widthBeforeWideFullAlignments: parseInt( width, 10 ) } );
		const updateHeight = ( height ) => setAttributes( { height: parseInt( height, 10 ) } );
		
		const playPause = () => { //  Use HTML5 video API methods to play() or pause() video
			const algori360Video = document.getElementById("algori-360-video"); 
			( algori360Video.paused ) ? algori360Video.play() : algori360Video.pause();
		}
		
		const onSelectVideo = ( media ) => { // Set video url
			if ( ! media || ! media.url ) {
				setAttributes( { url: undefined, id: undefined } );
				return;
			}
			setAttributes( { url: media.url, id: media.id } );
		}
		
		const onSelectURL = ( newURL ) => {

			if ( newURL !== url ) {
				setAttributes( { url: newURL, id: undefined } );
			}
			
		}
		
		const onUploadError = ( message ) => {
			noticeOperations.removeAllNotices();
			noticeOperations.createErrorNotice( message );
		}

		
		const updateAlignment = ( nextAlign ) => {
			
			const extraUpdatedAttributes = [ 'wide', 'full' ].indexOf( nextAlign ) !== -1 ?
				{ width: undefined } :
				{ width: widthBeforeWideFullAlignments };
			
			setAttributes( { ...extraUpdatedAttributes, align: nextAlign } );
			
		} 
		
		const controls = ( // Set Block and Inspector Controls
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ updateAlignment }
					/>
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="video/*"
						onSelect={ onSelectVideo }
						onSelectURL={ onSelectURL }
						onError={ onUploadError }
					/>
				</BlockControls>
				{ !! url && (
					<InspectorControls>
						<PanelBody title={ __( '360° Video Settings' ) }>
							<div>
								<p>
									{ __( 'Video Dimensions' ) }
								</p>
								<div>
									{
										[ 'wide', 'full' ].indexOf( align ) !== -1 ?
										<Notice status="informational" isDismissible="false" >
											{__( 'The' ) } &nbsp; 
											<strong>{__( 'Width' ) }</strong> &nbsp;  
											{__( 'setting has been disabled because you have chosen either' ) } &nbsp;  
											<strong>{__( 'Full' ) }</strong> &nbsp; 
											{__( 'or' ) } &nbsp; 
											<strong>{__( 'Wide' ) }</strong> &nbsp; 
											{__( 'width alignment from the block toolbar.' ) } 
										</Notice> :
										<TextControl
											type="number"
											label={ __( 'Width' ) }
											value={ width !== undefined ? width : '' }
											placeholder={ 600 }
											min={ 1 }
											onChange={ updateWidth }
										/>
									}
									<TextControl
										type="number"
										label={ __( 'Height' ) }
										value={ height !== undefined ? height : '' }
										placeholder={ 300 }
										min={ 1 }
										onChange={ updateHeight }
									/>
								</div>
							</div>
						</PanelBody>
					</InspectorControls>
				) }
			</Fragment>
		);
		
		if ( ! url ) { // Upload video if it doesn't exist
			
			return ( 
				<Fragment>
					{ controls }
					<MediaPlaceholder
						icon='format-video'
						className={ className }
						labels={ {
							title: __( '360 Video' ),
							instructions: __( 'Drag a 360° video, upload a new one, insert from URL or select a file from your library.' ),
						} }
						onSelect={ onSelectVideo }
						onSelectURL={ onSelectURL }
						accept="video/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						notices={ noticeUI }
						onError={ noticeOperations.createErrorNotice }
					/>
				</Fragment>
			);
			
		}
		
		
		return ( // Return 360 video with play/pause button and element settings (css classes) and block controls. Get video using either { url } or { id }
			<Fragment>
				{ controls }
				{ isBlobURL( url ) && <Spinner /> }
				<figure 
					style={ [ 'wide', 'full' ].indexOf( align ) !== -1 ? { height } : { width, height } } // Remove width from style on wide alignments i.e delegate it to theme
					className={ `wp-block-algori-360-video-block-algori-360-video align${align}` } 
				>
					<a-scene loading-screen="enabled: false;" embedded>
					  <a-entity camera="" look-controls="reverseMouseDrag: true"></a-entity>
					  <a-assets>
						<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
					  </a-assets>
					  <a-videosphere src="#algori-360-video" ></a-videosphere>
					</a-scene>
					<div class="wp-block-algori-360-video-block-algori-360-video-controls" >
					  <button id="algori-360-video-play-pause-btn" onClick={ playPause } > 
						<span class="dashicons-before dashicons-controls-play" > 
						  { __( 'Play' ) } 
						</span>
						&nbsp;&#124;&nbsp;
						<span class="dashicons-before dashicons-controls-pause" > 
						  { __( 'Pause' ) } 
						</span> 
					  </button> 
					</div>
				</figure>
			</Fragment>
		);
		
	} ),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( { attributes, className } ) => {
		
		const { url, title, align, width, height, contentAlign, id } = attributes;
		
		return (
			<figure 
				style={ [ 'wide', 'full' ].indexOf( align ) !== -1 ? { height } : { width, height } } 
				className={ `align${align}` } 
			>
				<a-scene loading-screen="enabled: false;" device-orientation-permission-ui="enabled: false" embedded="">
				  <a-entity camera="" look-controls="reverseMouseDrag: true"></a-entity>
				  <a-assets>
					<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
				  </a-assets>
				  <a-videosphere src="#algori-360-video" ></a-videosphere>
				</a-scene>
				<div className="wp-block-algori-360-video-block-algori-360-video-controls" >
				  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
				    <span class="dashicons-before dashicons-controls-play" > 
					  { __( 'Play' ) }  
					</span>
					&nbsp;&#124;&nbsp;
					<span class="dashicons-before dashicons-controls-pause" > 
					  { __( 'Pause' ) }
					</span> 
				  </button> 
				</div>
			</figure>
		);
		
	},
	
	/**
	 * Array of deprecated forms of this block.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/deprecated-blocks/
	 */
	deprecated: [ 
		{
			attributes: {
				...blockAttributes,
			},
			
			save: ( { attributes, className } ) => {
		
				const { url, title, align, width, height, contentAlign, id } = attributes;
				
				return (
					<figure 
						style={ [ 'wide', 'full' ].indexOf( align ) !== -1 ? { height } : { width, height } } 
						className={ `align${align}` } 
					>
						<a-scene loading-screen="enabled: false;" device-orientation-permission-ui="enabled: false" embedded="">
						  <a-entity camera="" look-controls="reverseMouseDrag: true"></a-entity>
						  <a-assets>
							<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
						  </a-assets>
						  <a-videosphere src="#algori-360-video" ></a-videosphere>
						</a-scene>
						<div className="wp-block-cgb-block-algori-360-video-controls" >
						  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
							<span class="dashicons-before dashicons-controls-play" > 
							  { __( 'Play' ) }  
							</span>
							&nbsp;&#124;&nbsp;
							<span class="dashicons-before dashicons-controls-pause" > 
							  { __( 'Pause' ) }
							</span> 
						  </button> 
						</div>
					</figure>
				);
				
			},
		},
		{
			attributes: {
				...blockAttributes,
			},
			
			save: ( { attributes, className } ) => {
		
				const { url, title, align, width, height, contentAlign, id } = attributes;
				
				return (
					<figure 
						style={ [ 'wide', 'full' ].indexOf( align ) !== -1 ? { height } : { width, height } } 
						className={ `align${align}` } 
					>
						<a-scene loading-screen="enabled: false;" embedded="">
						  <a-entity camera="" look-controls="reverseMouseDrag: true"></a-entity>
						  <a-assets>
							<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
						  </a-assets>
						  <a-videosphere src="#algori-360-video" ></a-videosphere>
						</a-scene>
						<div className="wp-block-cgb-block-algori-360-video-controls" >
						  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
							<span class="dashicons-before dashicons-controls-play" > 
							  { __( 'Play' ) }  
							</span>
							&nbsp;&#124;&nbsp;
							<span class="dashicons-before dashicons-controls-pause" > 
							  { __( 'Pause' ) }
							</span> 
						  </button> 
						</div>
					</figure>
				);
				
			},
		},
		{
			attributes: {
				...blockAttributes,
			},
			
			save: ( { attributes, className } ) => {
		
				const { url, title, align, width, height, contentAlign, id } = attributes;
				
				return (
					<figure 
						style={ [ 'wide', 'full' ].indexOf( align ) !== -1 ? { height } : { width, height } } 
						className={ `align${align}` } 
					>
						<a-scene embedded="">
						  <a-assets>
							<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
						  </a-assets>
						  <a-videosphere src="#algori-360-video" ></a-videosphere>
						</a-scene>
						<div className="wp-block-cgb-block-algori-360-video-controls" >
						  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
							<span class="dashicons-before dashicons-controls-play" > 
							  { __( 'Play' ) }  
							</span>
							&nbsp;&#124;&nbsp;
							<span class="dashicons-before dashicons-controls-pause" > 
							  { __( 'Pause' ) }
							</span> 
						  </button> 
						</div>
					</figure>
				);
				
			},
		},
		{
			attributes: {
				...blockAttributes,
			},
			
			save: ( { attributes, className } ) => {
		
				const { url, title, align, width, height, contentAlign, id } = attributes;
				
				return (
					<figure style={ { width, height } } >
						<a-scene embedded="">
						  <a-assets>
							<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
						  </a-assets>
						  <a-videosphere src="#algori-360-video" ></a-videosphere>
						</a-scene>
						<div className="wp-block-cgb-block-algori-360-video-controls" >
						  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
							<span class="dashicons-before dashicons-controls-play" > 
							  { __( 'Play' ) }  
							</span>
							&nbsp;&#124;&nbsp;
							<span class="dashicons-before dashicons-controls-pause" > 
							  { __( 'Pause' ) }
							</span> 
						  </button> 
						</div>
					</figure>
				);
				
			},
		},
		{
			attributes: {
				...blockAttributes,
			},
			
			save: ( { attributes, className } ) => {
		
				const { url, title, align, width, height, contentAlign, id } = attributes;
				
				return (
					<div>
						<a-scene className="wp-block-cgb-block-algori-360-video-embedded-scene" style={ { width, height } } embedded="">
						  <a-assets>
							<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
						  </a-assets>
						  <a-videosphere src="#algori-360-video" ></a-videosphere>
						</a-scene>
						<div className="wp-block-cgb-block-algori-360-video-controls" style={ { width } } >
						  <button id="algori-360-video-play-pause-btn" onclick="const algori360Video = document.getElementById('algori-360-video'); (algori360Video.paused) ? algori360Video.play() : algori360Video.pause();" > 
							<span class="dashicons-before dashicons-controls-play" > 
							  { __( 'Play' ) }  
							</span>
							&nbsp;&#124;&nbsp;
							<span class="dashicons-before dashicons-controls-pause" > 
							  { __( 'Pause' ) }
							</span> 
						  </button> 
						</div>
					</div>
				);
				
			},
		}
	],
		
} );
