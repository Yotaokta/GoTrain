(function ($) {

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $("div.navbar-container").addClass("background-header");
    } else {
      $("div.navbar-container").removeClass("background-header");
    }
  });


  // Menu Dropdown Toggle
  $(".menu-mobile").on('click', function () {
    $('.navbar-link-container').fadeToggle(200);
  });

  // Page loading animation
  $(window).on('load', function () {
    $('#js-preloader').addClass('loaded');
  });

})(jQuery);