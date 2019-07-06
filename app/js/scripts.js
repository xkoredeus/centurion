$(function() {
  $('.offer__slider').owlCarousel({
      nav: true,
      center: true,
      smartSpeed: 800,
      items: 1,
      loop: true,
      dots: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
	});

// jur slider
  var sync1 = $('.jur__bot');
  var sync2 = $('.jur__top');

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
    // video:true,
    startPosition: 1,
    items:1,
    loop:true,
    margin:10,
    smartSpeed: 700,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    nav: false,
    dots: false,
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 1,
    items:4,
    loop:false,
    margin: 0,
    autoplay:false,
    nav: true,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    dots: false,
    responsive : {
      0   : {
          items: 1,
          autoHeight: true
      },
      380 : {
          items: 1,
      },
      480 : {
          items: 1,
      },
      768 : {
          items: 3,
      },
      1040 : {
          items: 5,
          autoHeight: false
      }
    },
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });

  //dir slider
  $('.dir__bot').owlCarousel({
      nav: true,
      items: 5,
      startPosition: 1,
      loop: false,
      margin: 0,
      // center: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1,
            autoHeight: true
        },
        380 : {
            items: 1,
        },
        480 : {
            items: 2,
        },
        768 : {
            items: 3,
        },
        1040 : {
            items: 5,
            autoHeight: false
        }
      },
   });
  //dir map
  if ( $(window).width() > 768 ) {
    $('.dir__mark').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      var i = ($(this).index());
      $('.dir__bot').trigger('to.owl.carousel', $(this).data( 'position' ) );
      $('.dir__bot .owl-stage .owl-item').eq($(this).index()).addClass('active-mark').siblings('.owl-item').removeClass('active-mark');

      var $owl = $('.dir__bot');
      $owl.children().each( function( i ) {
        $(this).attr( 'data-position', i ); // NB: .attr() instead of .data()
      });
      var carousel = $('.dir__bot').data('owl.carousel');

      carousel.to(carousel.relative($(this).index()));

    });
    $('.dir__bot .owl-stage .owl-item').click(function(){
      $(this).addClass('active-mark').siblings('').removeClass('active-mark');
      $('.dir__mark').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
  };
    //park slider
    $('.park__slider').owlCarousel({
      nav: true,
      items: 2,
      loop: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 1
        },
        1040 : {
            items: 2
        }
      }
   });
	// tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  if ( $(window).width() > 1200 ) {
    //нам доверяют
    $('.part__item-wrp').slice(8).hide();
    $('.show-more_part').on('click', function(e){
      e.preventDefault();
      $('.part__item-wrp').slice(8).slideToggle();
      $('html, body').animate({
          scrollTop: $(window).scrollTop() + 150
      });
      $(this).hide();
    });
    //рекомендуют
    $('.rec__item-wrp').slice(4).hide();
    $('.show-more_rec').on('click', function(e){
      e.preventDefault();
      $('.rec__item-wrp').slice(4).slideToggle();
      $('html, body').animate({
          scrollTop: $(window).scrollTop() + 150
      });
      $(this).hide();
    });
  };
  if ( $(window).width() < 1199 ) {
   //Скролл на табах
    $('.serv__btn').on('click', function(){
      $('html, body').animate({
          scrollTop: $("#serv__content").offset().top - 50
      }, 700);
    });
    $('.serv .tabs__content-item').addClass('owl-carousel').trigger( 'click');
    $('.serv .tabs__content-item').owlCarousel({
      nav: true,
      items: 1,
      loop: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
   });
    $(".serv .tabs__content-item:not(:first-child)").hide();
    $('.part__in').addClass('owl-carousel');
    $('.part__in').removeClass('row');
    $('.part__in').owlCarousel({
      nav: true,
      // items: 2,
      loop: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
   });

    $('.rec__in').addClass('owl-carousel');
    $('.rec__in').removeClass('row');
    $('.rec__in').owlCarousel({
      nav: true,
      // items: 2,
      loop: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
   });
  };
  //mobile menu
  $(".header__hamburger").on('click',function() {
      $(this).toggleClass("active");
      $('.header__nav').toggleClass("active");
      $('body').toggleClass("fixed");
  });
  
  if ( $(window).width() < 600 ) {
    $('.footer__link').hide();
    $('.footer__ttl:first-child').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active').siblings('.footer__link').slideToggle();
    });
  };
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});