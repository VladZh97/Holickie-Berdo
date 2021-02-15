<footer class="footer">
    <div class="footer__inner">
        <div class="footer__container container">
        <?php
            wp_nav_menu(array(
            'container'      => '',
            'menu_id'        => 'footer__menu',
            'menu_class'     => 'footer__menu',
            'fallback_cb'    => 'thesis_nav_menu',
            'theme_location' => 'footer',
            ));
        ?>
        </div>
        <div class="footer__seo">
        <p class="footer__seo-copy">Copyright © Holickie Berdo 2021. All rights reserved</p>
        <p class="footer__seo-contact">Tworzenie Stron WWW - <a href="tel:">516 021 987</a></p>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>

<script>const privacylink = "<?php echo get_page_link(57) ?>";</script>
</body>

</html>