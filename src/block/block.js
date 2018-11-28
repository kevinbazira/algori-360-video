/**
 * BLOCK: algori-360-video
 *
 * Algori 360 Video is a Gutenberg Block Plugin that enables you add interactive 360° videos to your WordPress website.
 */
 
 
/**
 * WordPress dependencies
 */
const { 
	IconButton, 
	PanelBody,
	TextControl,  
	Toolbar, 
	withNotices } = wp.components; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';
const { Fragment } = wp.element; // import { Fragment } from '@wordpress/element';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaPlaceholder,
	MediaUpload,
	AlignmentToolbar,
	RichText, 
} = wp.editor; // Import * from @wordpress/editor 


/**
 * Internal dependencies
 *
 * Import CSS.
 */
import './style.scss';
import './editor.scss';

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
registerBlockType( 'cgb/block-algori-360-video', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	
	title: __( '360° Video' ), // Block title.
	
	description: __( 'Embed a 360° video file with a simple play/pause button.' ),  // Block description that appears in the block inspector. Make it short preferably.
	
	icon: 'format-video', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	
	keywords: [ // Block search keywords
		__( 'algori panorama video - three sixty degree video' ), 
		__( 'spherical video - full-sphere video' ), 
		__( 'equirectangular video - VR (Virtual Reality) videography' ), 
	],
	
	attributes: blockAttributes,  // Block attributes for editing in the block inspector.
	
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: withNotices( ( { attributes, setAttributes, isSelected, className, noticeOperations, noticeUI } ) => {
		
		const { url, title, align, width, height, contentAlign, id } = attributes;
		const updateWidth = ( width ) => setAttributes( { width: parseInt( width, 10 ) } );
		const updateHeight = ( height ) => setAttributes( { height: parseInt( height, 10 ) } );
		
		const playPause = () => { //  Use HTML5 video API methods to play() or pause() video
			const algori360Video = document.getElementById("algori-360-video"); 
			(algori360Video.paused) ? algori360Video.play() : algori360Video.pause();
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
		
		
		const controls = ( // Set Block and Inspector Controls
			<Fragment>
				<BlockControls>
					<Toolbar>
						<MediaUpload
							onSelect={ onSelectVideo }
							allowedTypes={ [ 'video' ] }
							value={ id }
							render={ ( { open } ) => (
								<IconButton
									className="components-toolbar__control"
									label={ __( 'Edit video' ) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				</BlockControls>
				{ !! url && (
					<InspectorControls>
						<PanelBody title={ __( '360° Video Settings' ) }>
							<div>
								<p>
									{ __( 'Video Dimensions' ) }
								</p>
								<div>
									<TextControl
										type="number"
										label={ __( 'Width' ) }
										value={ width !== undefined ? width : '' }
										placeholder={ 600 }
										min={ 1 }
										onChange={ updateWidth }
									/>
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
						allowedTypes={ [ 'video' ] }
						notices={ noticeUI }
						onError={ noticeOperations.createErrorNotice }
					/>
				</Fragment>
			);
			
		}
		
		
		return ( // Return 360 video with play/pause button and element settings (css classes) and block controls. Get video using either { url } or { id }
			<Fragment>
				{ controls }
				<figure style={ { width, height } } >
					<a-scene embedded>
					  <a-assets>
						<video id="algori-360-video" src={ url } crossorigin="anonymous" autoplay="false" loop="true" ></video>
					  </a-assets>
					  <a-videosphere src="#algori-360-video" ></a-videosphere>
					</a-scene>
					<div class="wp-block-cgb-block-algori-360-video-controls" >
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
	 */
	
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
