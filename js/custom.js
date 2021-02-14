(function($) {

    "use strict";



    // COLOR MODE
    $('.color-mode').click(function() {
        $('.color-mode-icon').toggleClass('active');
        // $('body').toggleClass('dark-mode')
    });

    // TOGGLE COLOR MODE ICON

    $(function() {
        $('#toggle-icon').addClass('color-mode-icon');
    });

    $('#toggle-icon').toggleClass(window.localStorage.toggled);

    $('.color-mode').on('click', function() {

        if (window.localStorage.toggled != "active") {
            $('.color-mode-icon').toggleClass("active", true);
            window.localStorage.toggled = "active";
        } else {
            $('.color-mode-icon').toggleClass("active", false);
            window.localStorage.toggled = "";
        }

    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

    // TOGGLE DARK
    if (localStorage.getItem('dark-mode') === '1') {
        document.documentElement.classList.add('dark-mode');
    }

    document.querySelector('#darkToggle').addEventListener('click', function() {
        var wasDarkMode = localStorage.getItem('dark-mode') === '1';

        localStorage.setItem('dark-mode', wasDarkMode ? '0' : '1');
        document.documentElement.classList[wasDarkMode ? 'remove' : 'add']('dark-mode');
    });

    //PUSH CONTENT DOWN

    var selectBody = $('body');
    var selectNavbarCollapse = $('.navbar-collapse');

    var heightNavbarCollapsed = $('.navbar').outerHeight(true);
    var heightNavbarExpanded = 0;

    paddingSmall();

    selectNavbarCollapse.on('show.bs.collapse', function() {
        if (heightNavbarExpanded === 0) heightNavbarExpanded = heightNavbarCollapsed + $(this).outerHeight(true);
        paddingGreat();
    });
    selectNavbarCollapse.on('hide.bs.collapse', function() {
        paddingSmall();
    });

    $(window).resize(function() {
        if ((document.documentElement.clientWidth > 767) && selectNavbarCollapse.hasClass('in')) {
            selectNavbarCollapse.removeClass('in').attr('aria-expanded', 'false');
            paddingSmall();
        }
    });

    function paddingSmall() {
        selectBody.css('padding-top', heightNavbarCollapsed + 'px');
    }

    function paddingGreat() {
        selectBody.css('padding-top', heightNavbarExpanded + 'px');
    }


    $('#checkbox').click(function() {
        if ($(this).is(':checked')) {
            $(this).siblings('p').html('Tell me less');
        } else {
            $(this).siblings('p').html('Tell me more');
        }
    });

})(jQuery);