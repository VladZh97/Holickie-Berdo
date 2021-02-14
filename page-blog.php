<?php /*Template Name: Blog*/
get_header('subpage'); ?>

<main class="blog">
    <div class="blog__inner">
        <div class="blog__container container-inner">
            <?php 
                    $args = array(  
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'posts_per_page' => -1, 
                    );
                
                $loop = new WP_Query( $args ); 
        
                if($loop->have_posts()):
                    while ( $loop->have_posts() ) : 
                        $loop->the_post();?>
                        <div class="blog__item">
                            <div class="blog__image">
                                <?php the_post_thumbnail();?>
                            </div>
                            <div class="blog__des">
                                <h3 class="blog__title"><?php the_title(); ?></h3>
                                <p class="blog__text"><?php echo wp_trim_words( get_the_content(), 20, '...' ); ?></p>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="blog__link">Czytaj</a>
                        </div>
                        <?php
                    endwhile;
                endif;
            
                wp_reset_postdata();?>
        </div>
        <div class="blog__more-container anim-items">
            <a href="#" class="blog__more btn" id="more">Więcej</a>
        </div>
        <div class="blog__dec"></div>
    </div>
    <div class="blog__contact">
        <?php get_template_part( 'partials/contact', 'page' ); ?>
    </div>
</main>

<?php
get_footer();