(function ($) {

  $(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
      items: 2,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [990, 1],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 1000,
      autoPlay: true
    });

  });

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.services .header-text').height();
    var header = $('header').height();
    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 3
      },
      760: {
        items: 2
      }
    }
  });

  // Page loading animation
  $(window).on('load', function () {
    $('#js-preloader').addClass('loaded');
  });
})(window.jQuery);