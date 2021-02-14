<?php /*Template Name: Regulamin*/
get_header('subpage'); ?>

<main class="regulations">
    <h2 class="regulations__title"><?php the_title(); ?></h2>
    <div class="regulations__inner">
        <div class="regulations__container container">
            <div class="regulations__text"><?php the_content(); ?></div>
        </div>
        <?php get_template_part( 'partials/contact', 'page' ); ?>
    </div>
</main>

<?php
get_footer();