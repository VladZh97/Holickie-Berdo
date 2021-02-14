<?php /*Template Name: O nas*/
get_header('subpage'); ?>

<main class="about">
    <div class="about__inner">
        <div class="about__container container">
            <div class="about__des row anim-items">
                <div class="col-md-6">
                    <p class="about__des-text text"><?php the_field('des__left')?></p>
                </div>
                <div class="col-md-6">
                    <p class="about__des-text text"><?php the_field('des__right')?></p>
                </div>
            </div>
        </div>
        <div class="about__middle">
            <div class="about__middle-container container-inner">
                <div id="map"></div>
                <div class="about__row row anim-items">
                    <div class="about__items col-md-6">
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
                    </div>

                    <div class="about__items col-md-6">

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

                        <div class="about__item">
                            <div class="about__item-image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about5.png" alt="icon">
                            </div>
                            <p class="about__item-title"><?php the_field('item__title5')?></p>
                        </div>

                        <div class="about__item">
                            <div class="about__item-image">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/about/about6.png" alt="icon">
                            </div>
                            <p class="about__item-title"><?php the_field('item__title6')?></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="about__bottom container-inner">
            <div class="about__bottom-row row">
                <div class="about__bottom-image anim-items col-md-6">
                    <img src="<?php the_field('about__bottom-image')?>" alt="">
                </div>
                <div class="about__bottom-text anim-items col-md-6">
                    <p class="about__bottom-des text"><?php the_field('about__bottom-des')?></p>
                </div>
            </div>
        </div>
        <div class="about-nums">
            <h2 class="about-nums__title section-title anim-items"><?php the_field('about-nums__title')?></h2>
            <div class="about-nums__container">
                <div class="container-inner">
                    <div class="about-nums__row row">
                        <div class="about-nums__item col-md-3" id="counter">
                            <div class="about-nums__number" data-count="<?php the_field('about-nums__number1')?>">0</div>
                            <div class="about-nums__text__container">
                                <p class="about-nums__text"><?php the_field('about-nums__text1')?></p>
                            </div>
                        </div>
                        <div class="about-nums__item col-md-3">
                            <div class="about-nums__number" data-count="<?php the_field('about-nums__number2')?>">0</div>
                            <div class="about-nums__text__container">
                                <p class="about-nums__text"><?php the_field('about-nums__text2')?></p>
                            </div>
                        </div>
                        <div class="about-nums__item col-md-3">
                            <div class="about-nums__number" data-count="<?php the_field('about-nums__number3')?>">0</div>
                            <div class="about-nums__text__container">
                                <p class="about-nums__text"><?php the_field('about-nums__text3')?></p>
                            </div>
                        </div>
                        <div class="about-nums__item col-md-3">
                            <div class="about-nums__number" data-count="<?php the_field('about-nums__number4')?>">0</div>
                            <div class="about-nums__text__container">
                                <p class="about-nums__text"><?php the_field('about-nums__text4')?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="opinion">
            <h2 class="opinion__title section-title anim-items">Opinie</h2>
            <div class="opinion__inner anim-items">
                <div class="opinion__container container-inner">
                <?php if( have_rows('opinion') ): ?>
                    <ul class="opinion__list owl-carousel">
                    <?php while( have_rows('opinion') ): the_row(); 
                        $text = get_sub_field('text');
                        $image = get_sub_field('image');
                        $name = get_sub_field('name');
                        $city = get_sub_field('city');
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