<?php

add_theme_support( 'title-tag' );

function register_my_menus() {
  register_nav_menus( array(
    'main' => esc_html__( 'Primary' )
  ) );
}
add_action( 'init', 'register_my_menus' );



function include_my_scripts() {
  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/js/jquery.js', array(), null, true);
  wp_enqueue_script('owl-script', get_template_directory_uri() . '/assets/js/owl.carousel.js', array('jquery'), null, true);
  wp_enqueue_script('lightbox-script', get_template_directory_uri() . '/assets/js/lightbox.js', array('jquery'), null, true);
  wp_enqueue_script('mapbox-script', 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js', array('jquery'), null, true);
  wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), null, true);
  
  wp_enqueue_style('mapbox-style', 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css');
}
  
  add_action('wp_enqueue_scripts', 'include_my_scripts');



// ACF Theme setting page
function my_acf_op_init() {
  if( function_exists('acf_add_options_page') ) {
    acf_add_options_sub_page(array(
      'parent_slug' => 'themes.php',
      'page_title'     => 'Ustawienia motywu',
      'menu_title'     => 'Ustawienia motywu',
      'menu_slug'     => 'theme-setting',
      'position' => '21',
    ));
  }
}
add_action('acf/init', 'my_acf_op_init');


register_nav_menu('footer','Footer Menu');
add_action('thesis_hook_footer','custom_footer_menu');

add_theme_support( 'post-thumbnails' );

?>