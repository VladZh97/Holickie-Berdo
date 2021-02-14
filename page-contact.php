<?php /*Template Name: Kontakt*/
get_header('subpage'); ?>

<main class="contact">
    <div class="contact__inner">
        <div class="contact__container container">
            <h2 class="contact__title section-title anim-items"><?php the_field('contact__title')?></h2>
            <div class="contact__body">
                <div class="contact__left anim-items">
                    <?= do_shortcode('[contact-form-7 id="19" title="Formularz"]')?>
                </div>
                <div class="contact__right anim-items">
                    <div class="contact__right-item">
                        <p class="contact__right-title"><?php the_field('adres__title')?></p>
                        <div class="contact__right-address right-text"><?php the_field('adres')?></div>
                    </div>
                    <div class="contact__right-item">
                        <p class="contact__right-title"><?php the_field('date__title')?></p>
                        <a href="tel:<?php echo get_field('tel', 'option')?>" class="contact__right__link right-text"><?php the_field('tel', 'option')?></a>
                        <a href="mailto:<?php echo get_field('mail', 'option')?>" class="contact__right__link right-text"><?php the_field('mail', 'option')?></a>
                    </div>
                    <div class="contact__right-item">
                        <p class="contact__right-title"><?php the_field('firm__title')?></p>
                        <div class="contact__right-firm right-text"><?php the_field('firm__date')?></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-map">
                <h2 class="contact-map__title section-title anim-items"><?php the_field('contact-map__title')?></h2>
                <div id="map"></div>
        </div>
    </div>
</main>


<?php
get_footer();