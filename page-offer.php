<?php /*Template Name: Oferta*/
get_header('subpage'); ?>

<main class="offer">
    <div class="offer__inner">
        <div class="offer__container container-inner">
            <?php if( have_rows('offer') ): 
                $i = 1;
                ?>
                    <div class="offer__list">
                        <?php while( have_rows('offer') ): the_row(); 
                            $text = get_sub_field('text');
                            $image = get_sub_field('image');
                            $title = get_sub_field('title');
                            ?>
                                <div class="offer__row anim-items row">
                                <div class="out__offer" id="<?php echo "oferta-".$i; ?>"></div>
                                    <div class="col-md-6">
                                        <div class="offer__left">
                                            <h2 class="offer__item-title"><?php echo $title?></h2>
                                            <p class="offer__item-text text"><?php echo $text?></p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="offer__right">
                                            <div class="offer__image">
                                                <img src="<?php echo $image?>" alt="obrazek">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php
					        $i++;
					        endwhile; 	$i = 1;?>
                    </div>
                <?php endif; ?>
        </div>
        <div class="about__contact">
            <?php get_template_part( 'partials/contact', 'page' ); ?>
        </div>
    </div>
</main>


<?php
get_footer();