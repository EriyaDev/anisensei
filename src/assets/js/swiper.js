var manySwiper = new Swiper('.many-swiper', {
  slidesPerView: 1.1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.7,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4.005,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    // hide: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
})
