(function ($) {
  "use strict";

  // ///////////////////
  // preloader script
  // ///////////////////
  // loading-screen
  $(document).ready(function () {

    setTimeout(function () {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');

      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(1000).queue(function () {
          $(this).remove();
        });
      }
    }, 3000);

  });

  // ...............................................

  // ///////////////////
  // Sticky Navbar
  // ///////////////////
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });

  // ...............................................

  // ///////////////////
  // go-top button
  // ///////////////////
  $(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 600) $('.go-top').addClass('active');
    if (scrolled < 600) $('.go-top').removeClass('active');
  });

  // Click Event
  $('.go-top').on('click', function () {
    $("html, body").animate({
      scrollTop: "0"
    }, 100);
  });

  // ...............................................

  // ///////////////////
  // Facts counter
  // ///////////////////
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });

  // ...............................................
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // glightbox script
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  

  // ...............................................

  // ///////////////////
  // owlCarousel scripts
  // ///////////////////

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  // ...............................................

  // ///////////////////
  // Initiate the wowjs
  // ///////////////////
  new WOW().init();


})(jQuery);