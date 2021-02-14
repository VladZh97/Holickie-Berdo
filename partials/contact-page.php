<div class="page-contact anim-items">
    <div class="page-contact__item">
        <div class="page-contact__image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/contact/phone-white.png" alt="phone">
        </div>
        <div class="page-contact__text">
            <p class="page-contact__title">Numer telefonu</p>
            <a href="tel:<?php echo get_field('tel', 'option')?>" class="page-contact__des"><?php the_field('tel', 'option')?></a>
        </div>
    </div>

    <div class="page-contact__item">
        <div class="page-contact__image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/contact/home-white.png" alt="adres">
        </div>
        <div class="page-contact__text">
            <p class="page-contact__title">Adres</p>
            <p class="page-contact__des"><?php the_field('adres', 17)?></p>
        </div>
    </div>

    <div class="page-contact__item">
        <div class="page-contact__image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/contact/mail-white.png" alt="mail">
        </div>
        <div class="page-contact__text">
            <p class="page-contact__title">E-mail</p>
            <a href="mailto:<?php echo get_field('mail', 'option')?>" class="page-contact__des"><?php the_field('mail', 'option')?></a>
        </div>
    </div>
</div>