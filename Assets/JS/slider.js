const swiper = new Swiper('.header-swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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