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


  // jur slider
  // var sync1 = $('.jur__top'),
  //       sync2 = $('.jur__bot'),
  //       duration = 500,
  //       thumbs = 5;

  //   // Sync nav
  //   sync1.on('click', '.owl-next', function () {
  //       sync2.trigger('next.owl.carousel')
  //   });
  //   sync1.on('click', '.owl-prev', function () {
  //       sync2.trigger('prev.owl.carousel')
  //   });

  //   // Start Carousel
  //   sync1.owlCarousel({
  //       // rtl: true,
  //       // center: true,
  //       nav: true,
  //       loop: true,
  //       dots: false,
  //       items: thumbs,
  //       margin: 0,
  //       smartSpeed: 700,
  //       animateIn: 'fadeIn',
  //       animateOut: 'fadeOut',
  //       lazyLoad: true,
  //       mouseDrag: false,
  //       // autoplay: true,
  //       // autoplayTimeout: 5000,
  //       // autoplayHoverPause: true,
  //       navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
  //   }).on('click', '.owl-item', function () {
  //       var i = $(this).index() - (thumbs + 1);
  //       // var a = $(this).index() - (thumbs - 1);

  //       sync2.trigger('to.owl.carousel', [i, duration, true]);
  //       sync1.trigger('to.owl.carousel', [i, duration, true]);
  //       // $(a).addClass('center');
  //   });

  //   sync2.owlCarousel({
  //       // center: true,
  //       loop: true,
  //       items: 1,
  //       margin: 2,
  //       smartSpeed: 700,
  //       nav: false,
  //       dots: false,
  //       animateIn: 'fadeIn',
  //       animateOut: 'fadeOut',
  //       mouseDrag: false,
  //       // responsive: {
  //       //     0: {
  //       //         items: 3
  //       //     },
  //       //     768: {
  //       //         items: 4
  //       //     }
  //       // }
  //   }).on('dragged.owl.carousel', function (e) {
  //       if (e.relatedTarget.state.direction == 'left') {
  //           sync2.trigger('next.owl.carousel')
  //       } else {
  //           sync2.trigger('prev.owl.carousel')
  //       }
  //   });
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
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});