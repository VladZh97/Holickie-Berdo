<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Facebook -->
    <meta property="og:title" content="<?php bloginfo( 'name' ); ?>">
    <meta property="og:site_name" content="<?php bloginfo( 'name' ); ?>">
    <meta property="og:url" content="<?php echo get_home_url(); ?>">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/home/logo.png">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo get_home_url(); ?>">
    <meta property="twitter:title" content="">
    <meta property="twitter:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/home/logo.png">

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="header-front">
        <div class="spinner__container">
        <div class="loader"></div>
        </div>
        <div class="arrow__up"></div>
            <div class="header__inner">
            <div class="header__contact header__contact-top">
                        <div class="header__phone header-box anim-items">
                            <div class="header-box__image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/phone.png" alt="phone" class="header-box__icon">
                            </div>
                            <a href="tel:<?php echo get_field('tel', 'option')?>" class="header-box__link"><?php the_field('tel', 'option')?></a>
                        </div>
                        <div class="header__mail header-box anim-items">
                            <div class="header-box__image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/mail.png" alt="mail" class="header-box__icon">
                            </div>
                            <a href="mailto:<?php echo get_field('mail', 'option')?>" class="header-box__link"><?php the_field('mail', 'option')?></a>
                        </div>
                    </div>
                <?php if( have_rows('hero', 'option') ): ?>
                    <ul class="hero__list owl-carousel">
                    <?php while( have_rows('hero', 'option') ): the_row(); 
                        $image = get_sub_field('image', 'option');
                        ?>
                        <li class="hero__item">
                            <img src="<?php echo $image?>" alt="hero" class="hero__item-image">
                        </li>
                    <?php endwhile; ?>
                    </ul>
                <?php endif; ?>
                <div class="header__icons">
                    <a href="<?php the_field('facebook', 'option')?>" class="header__icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/facebook.png" alt="facebook" class="header__icon-image">
                    </a>
                    <a href="<?php the_field('instagram', 'option')?>" class="header__icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/insta.png" alt="instagram" class="header__icon-image">
                    </a>
                    <a href="<?php the_field('tripadvisor', 'option')?>" class="header__icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/tripAd.png" alt="tripadvisor" class="header__icon-image">
                    </a>
                    <a href="<?php the_field('bookig', 'option')?>" class="header__icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/booking.png" alt="bookig" class="header__icon-image">
                    </a>
                </div>
                
                <div class="container-inner header__container">
                    <div class="header__top-container">
                        <div class="header__top">
                            <div class="header__logo">
                                <a href="<?php echo get_home_url()?>" class="header__logo-link">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/home/logo.png" alt="logo">
                                </a>
                            </div>
                            <div class="header__nav">
                                <div id="menu" class="menu">
                                    <nav id="menu__main" class="menu__main">
                                        <?php
                                            wp_nav_menu(array(
                                            'theme_location' => 'main',
                                            'container' => 'ul',
                                            'menu_class' => 'header__items'
                                            ));
                                        ?>

                                    </nav>
                                </div>
                            </div>
                            <a href="<?php the_field('reservation', 'option')?>" class="header__reservation btn">Rezerwacja</a>
                        </div>
                        <div class="header__logo header__logo--mobile">
                                <a href="<?php echo get_home_url()?>" class="header__logo-link">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/home/logo.png" alt="logo">
                                </a>
                            </div>
                            <div class="menu-btn">
                                <div class="menu-btn__burger"></div>
                            </div>
                    </div>

                    <div class="header__middle">
                        <div class="slider-counter"></div>
                        <h1 class="hero__title title"><?php the_field('hero__title', 'option')?></h1>
                        <div class="owl-controls">
                            <div id="customNav" class="owl-nav"></div>
                        </div>
                    </div>

                </div>
                <div class="header__bottom">
                    <div class="header__contact">
                        <div class="header__phone header-box anim-items">
                            <div class="header-box__image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/phone.png" alt="phone" class="header-box__icon">
                            </div>
                            <a href="tel:<?php echo get_field('tel', 'option')?>" class="header-box__link"><?php the_field('tel', 'option')?></a>
                        </div>
                        <div class="header__mail header-box anim-items">
                            <div class="header-box__image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/mail.png" alt="mail" class="header-box__icon">
                            </div>
                            <a href="mailto:<?php echo get_field('mail', 'option')?>" class="header-box__link"><?php the_field('mail', 'option')?></a>
                        </div>
                    </div>
                    <div class="header__blog owl-carousel">
                    <?php 
                    $args = array(  
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'posts_per_page' => 8, 
                    );
                
                        $loop = new WP_Query( $args ); 
                
                        if($loop->have_posts()):
                            while ( $loop->have_posts() ) : 
                                $loop->the_post();?>
                                <div class="post__item">
                                    <div class="post__image">
                                        <?php the_post_thumbnail();?>
                                    </div>
                                    <div class="post__des">
                                        <h3 class="post__title"><?php the_title(); ?></h3>
                                        <a href="<?php the_permalink(); ?>" class="blog__link">Czytaj</a>
                                    </div>
                                    
                                </div>
                                <?php
                            endwhile;
                        endif;
                    
                        wp_reset_postdata();?>
                    </div>
                </div>
            </div>
    </header>