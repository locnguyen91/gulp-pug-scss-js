$(document).ready(function() {
    'use strict';

    if ($(window).width() >= 1000) {
        $('.work-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }]
        });
        $('.tabs .tab-links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');
            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).show().siblings().hide();
            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            $('.work-slider').slick("setPosition");
            e.preventDefault();
        });
    }

    if ($(window).width() < 1000) {
        $('.tabs .tab-links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');
            var currentHtml = $(this).html();
            console.log(currentHtml);
            // Show/Hide Tabs
            $('.tabs ' + currentAttrValue).show().siblings().hide();
            $('.title-tabMobile').text(currentHtml);
            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            $('.tab-links').removeClass('open');
            e.preventDefault();
        });
        $('.title-tabMobile').on('click', function () {
            $('.tab-links').toggleClass('open');
        });

        $('.btn-lg').on('click', function () {
            $('.dropdown-child').toggleClass('open');
        });
    }

    new WOW({
        offset: 0
    }).init();

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('html').css('overflow-y', 'hidden');
        $(this).toggleClass('active');
    });

    $('.btn-closemenu').click(function () {
        $('.menu').removeClass('open');
        $('html').css('overflow-y', 'auto');
        $('.btn-showmenu').removeClass('active');
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
});