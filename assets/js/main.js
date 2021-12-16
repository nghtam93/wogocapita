$(document).ready(function(){

     new WOW().init();

    //-------------------------------------------------
    // Header Search
    //-------------------------------------------------
    var $headerSearchToggle = $('.header__search--toggle');
    var $headerSearchForm = $('.header__search__form');

    $headerSearchToggle.on('click', function() {
        var $this = $(this);
        var $header = $(this).closest('.header__search');

        if(!$header.hasClass('open-search')) {
            $header.addClass('open-search');
            $headerSearchForm.slideDown();
        } else {
            $header.removeClass('open-search');
            $headerSearchForm.slideUp();
        }
    });

    $('.header__search').mousedown(function(e){ e.stopPropagation(); });
    $(document).mousedown(function(e){
        $('.header__search').removeClass('open-search');
    });


    /*----Get Header Height ---*/
    function get_header_height() {
        var header_sticky=$("header").outerHeight()
        $('body').css("--header-height",header_sticky+'px')
    }

    setTimeout(function(){
        get_header_height()
    }, 500);

    $( window ).resize(function() {
      get_header_height()
    });


    /*----Back to top---*/
    var back_to_top=$(".back-to-top"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".back__to--top",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});


    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    // $('.nav__mobile--close').click(function(e){
    //     $('.nav__mobile').removeClass('active')
    //     $('body').removeClass('modal-open')
    // });
    // $('.menu-mb__btn').click(function(e){
    //     e.preventDefault()
    //     if($('body').hasClass('modal-open')){
    //         $('.menu-mb__btn').removeClass('active')
    //         $('.nav__mobile').removeClass('active')
    //         $('body').removeClass('modal-open')
    //     }else{
    //         $('.menu-mb__btn').addClass('active')
    //         $('body').addClass('modal-open')
    //         $('.nav__mobile').addClass('active')
    //     }
    // });

     //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $.fn.dnmenu = function( options ) {

        let thiz = this
        let menu = $(this).attr('data-id')
        let menu_id = '#'+menu

        // Default options
        var settings = $.extend({
            name: 'Menu'
        }, options );

        // get ScrollBar Width
        function getScrollBarWidth () {
            var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
                widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
            $outer.remove();
            return 100 - widthWithScroll;
        };
        let ScrollBarWidth = getScrollBarWidth() + 'px';

        // Create wrap
        // Button click
        thiz.click(function(e){
            e.preventDefault()
            console.log(thiz)
            if(thiz.hasClass('active')){
                // $('.dnmenu-backdrop').remove()
                $('body').removeClass('modal-open').css("padding-right","")
                $(menu_id).removeClass('active')
                $(thiz).removeClass('active')

            } else {
                // $('<div class="dnmenu-backdrop">').appendTo('body')
                $('body').addClass('modal-open').css("padding-right",ScrollBarWidth)
                $(menu_id).addClass('active')
                $(thiz).addClass('active')

            }
        });

        // Custom close
        // $('.nav__mobile__close').click(function(){
        //     $('body').removeClass('modal-open')
        //     $(this).removeClass('active')
        //     $(menu_id).removeClass('active')
        // })

        // Menu
        var el= $(menu_id).find(".nav__mobile--ul");
        el.find(".menu-item-has-children>a").after('<button class="nav__mobile__btn"><i></i></button>'),

        el.find(".nav__mobile__btn").on("click",function(e){
            e.stopPropagation(),
            $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
            $(this).parent().addClass("sub-active"),
            $(this).parent().find('.sub-menu').first().slideToggle()
        })

        // Apply options
        return;
    };

    $('.menu-mb__btn').dnmenu()



    //check home
    if($('body').hasClass( "home" ) || $('body').hasClass( "about" )){

        $('.home-about__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1,
                  }
                }
            ]
        });

        $('.js-slick__news2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1,
                  }
                }
            ]
        });

    }

    //check home

    if($('body').hasClass( "single" )){

        $('.related__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                  }
                }
            ]
        });

        Fancybox.bind("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif']", {
          groupAttr: false,
        });

    }

});


