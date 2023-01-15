const swiper = new Swiper('.header-swiper', {
    navigation: {
      nextEl: '.header-slider-next',
      prevEl: '.header-slider-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1280: {
            slidesPerView: 5,
        }
    }
});

const swiper2 = new Swiper('.promo-slider', {
    loop:true,
    pagination: {
      el: '.promo-slider-pagination',
    },
    navigation: {
      nextEl: '.promo-slider-next',
      prevEl: '.promo-slider-prev',
    },
});
const swiper3 = new Swiper('.product-slider', {
    loop:true,
    pagination: {
      el: '.product-slider-pagination',
    },
    navigation: {
      nextEl: '.product-slider-next',
      prevEl: '.product-slider-prev',
    },
});