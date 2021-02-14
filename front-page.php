<?php /*Template Name: Strona glowna*/
get_header(); ?>

<main class="front">
    <div class="front__inner">

        <div class="map">
            <h2 class="map__title section-title anim-items"><?php the_field('map__title')?></h2>
            <div class="map__container">
                <div class="container">
                    <div id="map"></div>
                    <div class="map__bottom">
                        <div class="map__left anim-items">
                            
                            <div class="about__item">
                                <div class="about__item-image">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about1.png" alt="icon">
                                </div>
                                <p class="about__item-title"><?php the_field('item__title1')?></p>
                            </div>

                            <div class="about__item">
                                <div class="about__item-image">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about2.png" alt="icon">
                                </div>
                                <p class="about__item-title"><?php the_field('item__title2')?></p>
                            </div>

                            <div class="about__item">
                                <div class="about__item-image">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about3.png" alt="icon">
                                </div>
                                <p class="about__item-title"><?php the_field('item__title3')?></p>
                            </div>

                            <div class="about__item">
                                <div class="about__item-image">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about4.png" alt="icon">
                                </div>
                                <p class="about__item-title"><?php the_field('item__title4')?></p>
                            </div>

                        </div>
                        <div class="map__right">
                            <div class="map__text text anim-items"><?php the_field('map__text')?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="offer">
            <div class="container-inner">
                <div class="offer__top">
                    <div class="offer__left">
                    <h3 class="offer__title anim-items"><?php the_field('offer__title')?></h3>
                    <div class="owl-controls">
                            <div id="customNavOffer" class="owl-nav"></div>
                        </div>
                    </div>
                    <a href="<?php the_permalink(11); ?>" class="offer__btn btn anim-items">Zobacz więcej</a>
                </div>

                <?php if( have_rows('offer') ): 
                    $i = 1;
                    ?>
                    <div class="offer__items owl-carousel">
                        <?php while( have_rows('offer') ): the_row(); 
                            $image = get_sub_field('image');
                            $title = get_sub_field('title');
                            ?>
                                <div class="offer__item">
                                    <img src="<?php echo $image?>" alt="obrazek">
                                    <div class="offer__item-bottom">
                                        <h3 class="offer__item-title"><?php echo $title?></h3>
                                        <a href="<?php echo "oferta/#oferta-".$i; ?>" class="offer__item-link"></a>
                                    </div>
                                </div>
                                <?php
                                $i++;
                                endwhile; 	$i = 1;?>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <div class="gallery">
        <h2 class="gallery__title section-title anim-items"><?php the_field('gallery__title')?></h2>
            <div class="gallery__inner">

                <div class="gallery__container anim-items container-inner">
                <?php if( have_rows('gallery') ): ?>
                    <div class="gallery__list anim-items">
                        <?php while( have_rows('gallery') ): the_row(); 
                            $image = get_sub_field('image');
                            ?>
                            <div class="gallery__item">
                                <a href="<?php echo $image['url']?>" data-lightbox="gallery"><img src="<?php echo $image['url']?>" alt="obrazek"></a>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>
                </div>
                <a href="<?php the_permalink(13);?>" class="gallery__link btn">Zobacz więcej</a>
            </div>
        </div>

        <div class="about">
            <div class="about__inner">
                <div class="about__container container-inner">
                    <div class="about__row anim-items row">
                        <div class="about__left col-md-6">
                            <h4 class="about__left-title anim-items"><?php the_field('about__left-title')?></h4>
                            <div class="about__left-text anim-items"><?php the_field('about__left-text')?></div>
                            <a href="<?php the_permalink(9); ?>" class="about__left-link btn anim-items">Czytaj więcej</a>
                        </div>
                        <div class="about__right col-md-6 anim-items">
                            <img src="<?php the_field('about__right-image1')?>" alt="" class="about__right-image">
                            <img src="<?php the_field('about__right-image2')?>" alt="" class="about__right-image-sm">
                            <img src="<?php the_field('about__right-image3')?>" alt="" class="about__right-image-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="opinion">
            <h2 class="opinion__title section-title anim-items">Opinie</h2>
            <div class="opinion__inner anim-items">
                <div class="opinion__container container-inner">
                <?php if( have_rows('opinion', 9) ): ?>
                    <ul class="opinion__list owl-carousel">
                    <?php while( have_rows('opinion', 9) ): the_row(); 
                        $text = get_sub_field('text', 9);
                        $image = get_sub_field('image', 9);
                        $name = get_sub_field('name', 9);
                        $city = get_sub_field('city', 9);
                        ?>
                        <li class="opinion__item">
                            <p class="opinion__item-text"><?php echo $text?></p>
                            <div class="opinion__item-bottom">
                                <img src="<?php echo $image?>" alt="photo" class="opinion__item-image">
                                <div class="opinion__item-des">
                                    <p class="opinion__item-name"><?php echo $name?></p>
                                    <p class="opinion__item-city"><?php echo $city?></p>
                                </div>
                            </div>
                        </li>
                    <?php endwhile; ?>
                    </ul>
                <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="about__contact">
            <?php get_template_part( 'partials/contact', 'page' ); ?>
        </div>
    </div>
</main>


<?php
get_footer();