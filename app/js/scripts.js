$(function() {
  $('.offer__slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
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