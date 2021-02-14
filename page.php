<?php
get_header();
?>

<div class="page-main">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <div class="page-main__content">
                    <?php the_content(); ?>
                </div>
                <?php endwhile; else: ?>
                <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>




<?php
get_footer();