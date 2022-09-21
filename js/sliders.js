$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    infinit: true,
    arrows: false,
    fade: true,
    cssEasy: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ]
  });
});


$('.slider-second').slick({
  dots: true,
  arrows: true,
  slidesToShow: 3,
  speed: 1000,
  easing: 'ease',
  autoplay: false,
  infinite: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        slidesToShow: 3,
        fade: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
        fade: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: false,
      }
    }
  ]

});