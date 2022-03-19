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

function alertTransaksi() {
  const kelas = document.getElementById('transaksi').dataset.kelas;
  swal({
      title: "Ingin Lanjutkan Transaksi?",
      text: "Anda akan di arahkan ke Whatsapp",
      icon: "warning",
      buttons: true,
    })
    .then((Result) => {
      if (Result) {
        window.location.href = `https://api.whatsapp.com/send?phone=+6285771944467&text=Hallo%20saya%20ingin%20membeli%20kelas%20${kelas}.`;
      }
    }).catch(
      result => {
        swal("Oops", "Transaksi Gagal Dilakukan", "error");
      }
    )
}

window.addEventListener('click', function (el) {
  if (el.target.classList.contains('whatsapp-icon') || el.target.classList.contains('whatsapp-float')) {
    window.location.href = 'https://api.whatsapp.com/send?phone=+6285771944467&text=Hallo%20saya%20ingin%20bertanya.'
  }
})