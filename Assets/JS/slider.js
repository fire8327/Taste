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
    navigation: {
      nextEl: '.product-slider-next',
      prevEl: '.product-slider-prev',
    },
});
const swiper4 = new Swiper('.stocks-slider', {
    loop:true,
    navigation: {
      nextEl: '.stocks-slider-next',
      prevEl: '.stocks-slider-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween:16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween:22,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween:25,
      },
      1280: {
          slidesPerView: 4,
          spaceBetween:29,
      },
  }
});
const swiper5 = new Swiper('.news-slider', {
    loop:true,
    navigation: {
      nextEl: '.news-slider-next',
      prevEl: '.news-slider-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween:16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween:22,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween:25,
      },
      1280: {
          slidesPerView: 4,
          spaceBetween:29,
      },
  }
});
const swiper6 = new Swiper('.hits-slider', {
    loop:true,
    navigation: {
      nextEl: '.hits-slider-next',
      prevEl: '.hits-slider-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween:16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween:22,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween:25,
      },
      1280: {
          slidesPerView: 4,
          spaceBetween:29,
      },
  }
});
const swiper7 = new Swiper('.categories-slider', {
    navigation: {
      nextEl: '.categories-slider-next',
      prevEl: '.categories-slider-prev',
    },
});