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
  // $('.main-slider__cnt').owlCarousel({
  //     nav: true,
  //     items: 1,
  //     loop: false,
  //     dots: true,
  //     navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
  //     responsive : {
  //       0   : {
  //           items: 1
  //       },
  //       380 : {
  //           items: 1
  //       },
  //       480 : {
  //           items: 1
  //       },
  //       768 : {
  //           items: 3
  //       },
  //       1040 : {
  //           items: 4
  //       }
  //     }
  // });

  //jur slider
  var sync1 = $('.jur__top'),
        sync2 = $('.jur__bot'),
        duration = 300,
        thumbs = 4;

    // Sync nav
    sync1.on('click', '.owl-next', function () {
        sync2.trigger('next.owl.carousel')
    });
    sync1.on('click', '.owl-prev', function () {
        sync2.trigger('prev.owl.carousel')
    });

    // Start Carousel
    sync1.owlCarousel({
        // rtl: true,
        // center: true,
        nav: true,
        loop: true,
        dots: false,
        items: thumbs,
        margin: 0,
        center: false,
        smartSpeed: 700,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        mouseDrag: false,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
    }).on('click', '.owl-item', function () {
        var i = $(this).index() - (thumbs + 1);

        sync2.trigger('to.owl.carousel', [i, duration, true]);
        sync1.trigger('to.owl.carousel', [i, duration, true]);
        $(this).addClass('center');
    });


    sync2.owlCarousel({
        
        loop: true,
        items: 1,
        margin: 2,
        smartSpeed: 700,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        // responsive: {
        //     0: {
        //         items: 3
        //     },
        //     768: {
        //         items: 4
        //     }
        // }
    }).on('dragged.owl.carousel', function (e) {
        if (e.relatedTarget.state.direction == 'left') {
            sync2.trigger('next.owl.carousel')
        } else {
            sync2.trigger('prev.owl.carousel')
        }
    });
    //park slider
    
    $('.park__slider').owlCarousel({
      nav: true,
      items: 2,
      loop: true,
      smartSpeed: 700,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
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
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});