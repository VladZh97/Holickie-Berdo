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
    </div>
</footer>
<?php wp_footer(); ?>

<script>const privacylink = "<?php echo get_page_link(57) ?>";</script>
</body>

</html>