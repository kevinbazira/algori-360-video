<?php
/**
 * Plugin Name: Algori 360 Video
 * Plugin URI: https://github.com/kevinbazira/algori-360-video/
 * Description: <strong>360 Video</strong> is a Gutenberg Block Plugin that enables you add interactive 360° videos to your website. Adding immersive panorama videos, spherical videos, equirectangular videos and VR (Virtual Reality) videography <strong>will boost user engagement and increase revenue for your site</strong>.
 * Author: Kevin Bazira
 * Author URI: http://kevinbazira.com/
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Algori_360_Video
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
