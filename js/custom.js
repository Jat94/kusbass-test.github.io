;
$(document).ready(function() {

    if ($(window).width() < 1024) {
        $('.lp-nav-burger').click(function() {
            $(this).toggleClass('lp-active');
            $(this).next('.lp-nav-list').fadeToggle(300);
        });


        $('.lp-nav-link, .lp-nav-dropdown-link').click(function(e) {
            if ($(this).next('.lp-nav-dropdown').length) {
                e.preventDefault();
                e.stopPropagation();
                $(this).next('.lp-nav-dropdown').slideToggle(300);
                $(this).toggleClass('lp-active');
            }
        });
    };




    $('.lp-mobile-slider:not(.lp-desktop-slider)').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });

    $('.lp-desktop-slider:not(.lp-mobile-slider)').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    });


    $('.lp-desktop-slider.lp-mobile-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });


    $('.lp-flex-gallery-limiter').each(function() {
        let button = $(this).next('.prm-flex-gallery-limiter-button').find('.lp-button');
        let limiter = $(this);
        let limiterHeight = limiter.height();
        let gallery = $(this).find('.lp-flex-gallery-row')
        let galleryHeight = gallery.height();

        if (limiterHeight >= galleryHeight) {
            console.log('disable button');
            button.fadeOut(0);
        }

        button.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            limiter.css("max-height", galleryHeight + "px");
            button.slideUp(300);
        });
    });




});