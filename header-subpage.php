<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="<?php bloginfo('description'); ?>" />

    <meta property="og:url" content="http://localhost/domki/" />
    <meta property="og:title" content="Domki w Bieszczadach" />
    <meta property="og:description" content="<?php bloginfo('description'); ?>" />
    <meta property="og:image" content="" />

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="header-sub">
        <div class="spinner__container">
        <div class="loader"></div>
        </div>
        <div class="arrow__up"></div>
            <div class="header__inner" style="background-image: url('<?php the_field('bg-image', 'option')?>')">
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
                    <div class="header__bottom">
                        <h1 class="title header__title anim-items"><?php the_title(); ?></h1>
                    </div>
                </div>
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
            </div>
    </header>