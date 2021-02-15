<?php
get_header('subpage');
?>
<div class="single">
    <div class="single__inner">
        <h1 class="single__title title anim-items"><?php the_title(); ?></h1>
        <div class="single__image anim-items">
            <?php the_post_thumbnail( 'full' );?>
        </div>
        <div class="single__container">
            <div class="single__content">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <div class="single__main anim-items">
                    <?php the_content(); ?>
                </div>
                <?php endwhile; else: ?>
                <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
                <?php endif; ?>

            </div>
            <div class="single__bottom">
                <div class="single__button">
                    <a href="<?php the_permalink( 15 )?>" class="single__button btn">Powrót do listy</a>
                </div>
                <div class="single__share">
                    <h3 class="single__share-title">Udostępnij</h3>
                    <?= do_shortcode('[Sassy_Social_Share]')?>
                </div>
                <div class="single__autor">
                    <img src="<?php the_field('autor__image')?>" alt="autor" class="single__autor-image">
                    <div class="single__autor-text">
                        <p class="single__autor-name"><?php the_field('name')?></p>
                        <p class="single__autor-position"><?php the_field('position')?></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="about__contact">
            <?php get_template_part( 'partials/contact', 'page' ); ?>
        </div>
    </div>
</div>

<?php
get_footer();