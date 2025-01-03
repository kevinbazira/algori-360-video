# Algori 360 Video 

Contributors: [Kevin Bazira](http://kevinbazira.com)

Tags: gutenberg, block, block editor, 360, video, panorama, spherical-videos, VR, Virtual Reality, videography

Requires at least: WP 5.0.0
* Tested up to: WP 6.7.1
* Stable tag: 1.0.9
* License: GNU General Public License v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.en.html

Algori 360 Video is a Gutenberg Block Plugin that enables you add interactive 360° videos to your WordPress website. 

<p align="center">
  <img src="https://ps.w.org/360-video/assets/screenshot-1.gif" alt="Algori 360 Video">
</p>

# Description 

Algori 360 Video is a Gutenberg Block Plugin that enables you add interactive 360° videos to your WordPress website. Adding immersive panorama videos, spherical videos, equirectangular videos, and VR (Virtual Reality) videography will boost user engagement and increase revenue for your site.

Please Note that this plugin; 
* Currently supports one 360° video per page.
* Requires the Gutenberg editor to be activated on your WordPress site in order to access and use the 360° video block.

# Features

* No Flash Needed
* Compatible with Modern Browsers like Chrome, Firefox, Edge and Safari.
* Supports VR (Virtual Reality) headsets such as Vive, Rift, Windows Mixed Reality, Daydream, GearVR and Cardboard.
* Supports MP4.
* Supports both mouse and touch.
* Has Play/Pause button to play and pause video.
* You can zoom into the video using touch.
* Only one 360° video can be loaded on a single page.

# Installation

* Download the plugin, unzip it and move the unzipped folder to the "wp-content/plugins" directory in your WordPress installation.
* In your admin panel, go to Plugins and you'll find 360 Video in the plugins section.
* Click on the 'Activate' button to use your new plugin right away.
* Go to http://www.kevinbazira.com/blog/article/how-to-add-360-degree-panorama-images-and-videos-to-your-wordpress-website-using-algori-360-image-and-video-gutenberg-plugins for a guide on how to add and customize 360° videos to your WordPress site.
* Done :)
* PS: Remember to click the **Enable auto-updates** link for this plugin so that you don't miss cool new features as they come in.

# How to use 

* After installing and activating the 360 Video plugin in your WordPress website.
* Navigate to your blog post or page and use the Gutenberg editor to add a 360 Video block.
* Use the 360 Video block to add a 360° video to your web page.
* At this point, you can use the "Play/Pause" button and also adjust your video's dimensions (width and height) using the Gutenberg block inspector section.
* Click "Publish" to view your new web page with a 360° video.
* Congratulations :D

# Frequently Asked Questions 

= Does this plugin support multiple 360° videos on one page? =

Nope. At the moment this plugin supports one 360° video per page.

= Can I use this plugin with other page builders I am using? =

Nope. Algori 360 Video only works with Gutenberg.

= What theme works with Algori 360 Video? =

Most WordPress themes that are optimized for Gutenberg will work well with Algori 360 Video. To get a full experience of the next-generation WordPress block editor, you’ll need a Gutenberg-ready WordPress theme, like [Algori Blogger](https://wordpress.org/themes/algori-blogger/) or [Algori Shop](https://wordpress.org/themes/algori-shop/).

# Changelog 

= 1.0.9 - Oct 27 2021 =
* Fixed 360 image block alignment by adding custom data-align attribute with getEditWrapperProps
* Bumped up version number
* Updated docs with v1.0.9 changes

= 1.0.8 - Aug 16 2020 =
* Added block preview using example metadata
* Disabled AR mode button
* Updated Algori 360 Video namespace
* Replaced block category 'common' with 'media'
* Added block.json for WP block directory

= 1.0.7 - July 26 2020 =
* Upgraded A-Frame from v1.0.3 to v1.0.4
* Fixed mouse drag in VR mode / fullscreen mode on desktop

= 1.0.6 - May 31 2020 =
* Disabled VR mode orientation permission modal dialog
* Removed Toolbar, MediaUploadCheck and deprecated wp.components.IconButton
* Added MediaReplaceFlow component that enables users to edit/replace a 360 video by using the Media Library or by inserting a URL or by uploading new media.
* Added deprecated block for Algori 360 video v1.0.5

= 1.0.5 - Jan 29 2020 =
* Upgraded A-Frame from v0.9.0 to v1.0.3
* Upgraded cgb-scripts from 1.13.0 to 1.22.0
* Updated deprecated wp.editor.BlockControls to wp.blockEditor.BlockControls.
* Updated deprecated wp.editor.MediaPlaceholder to wp.blockEditor.MediaPlaceholder.
* Updated deprecated wp.editor.BlockAlignmentToolbar to wp.blockEditor.BlockAlignmentToolbar.
* Updated deprecated wp.editor.MediaUploadCheck to wp.blockEditor.MediaUploadCheck.
* Updated deprecated wp.editor.MediaUpload to wp.blockEditor.MediaUpload.

= 1.0.4 - Jul 8 2019 =
* Upgraded A-Frame from v0.8.2 to v0.9.0
* Added Spinner to show 360 video loading is in progress instead of blank figure.
* Set loading-screen option default value to "enabled: false;"
* Fixed both mouse and touch dragging direction. Now dragging to the left actually rotates the 360 video to the left and same applies to the right.
* Added deprecated block for Algori 360 Video v1.0.3

= 1.0.3 - Apr 26 2019 =
* Upgraded cgb-scripts from 1.11.1 to 1.13.0
* Improved documentation to match WP standards
* Added MediaUploadCheck wrapper onto MediaUpload to make sure the current user has Upload permissions
* Added BlockAlignmentToolbar to enable users to choose left, right, center, wide, and full width alignments
* Added alignment styles for left, right, center, wide and full width alignments
* Added Notice in block inspector section to notify user when Full/Wide width alignments are chosen
* Removed unused styles from editor.scss

= 1.0.2 - Nov 28 2018 =
* Added Default 360° video width (600px) and height(300px)
* Added "Insert from URL" button to MediaPlaceholder
* Removed MediaPlaceholder labels name
* Added MediaPlaceholder labels instructions
* Removed core-blocks-image class from all InspectorControls
* Removed AlignmentToolbar
* Removed BlockAlignmentToolbar
* Changed 360° block div to figure
* Changed styles in CSS files to support figure
* Added social call to action into README.md

= 1.0.1 - Nov 12 2018 =
* Changed MediaPlaceholder and MediaUpload "type" to "allowedTypes" to support Gutenberg >= 4.2.0
* Added withNotices to support noticeOperations
* Added algori in the block keywords

= 1.0.0 - Aug 8 2018 =
* Initial Release

# Credits

* [create-guten-block](https://github.com/ahmadawais/create-guten-block) , (C) 2018 Ahmad Awais, [MIT](https://opensource.org/licenses/MIT)
* [A-Frame](https://aframe.io/) , (C) 2015-2018 Mozilla and A-Frame Authors, [MIT](https://opensource.org/licenses/MIT)

Algori 360 Video WordPress Plugin, Copyright 2025 Kevin Bazira.<br/>
Algori 360 Video is distributed under the terms of the GNU GPL.<br/><br/>


_If you like this project, please 🌟 star it here_ [![GitHub stars](https://img.shields.io/github/stars/kevinbazira/algori-360-video.svg?label=Stars&style=social)](https://github.com/kevinbazira/algori-360-video)
<br/>
_Follow me 👋 on Twitter for more projects like this_ [![Tweet to say Hi](https://img.shields.io/twitter/follow/kevinbazira.svg?style=social&label=Tweet%20@kevinbazira)](https://twitter.com/kevinbazira/)
