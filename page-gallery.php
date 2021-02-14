<?php /*Template Name: Galeria*/
get_header('subpage'); ?>


<main class="gallery">
    <div class="gallery__inner">
        <div class="gallery__container anim-items container-inner">
            <?php echo do_shortcode('[foogallery id="181"]')?>
        </div>
        <div class="about__contact">
            <?php get_template_part( 'partials/contact', 'page' ); ?>
        </div>
    </div>
</main>
<?php
get_footer();