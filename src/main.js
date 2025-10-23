import './assets/main.css'
import Swiper from 'swiper'
import 'swiper/css'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

AOS.init({
  once: true,
})

var manySwiper = new Swiper('.many-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
    1520: {
      slidesPerView: 5.1,
      spaceBetween: 20,
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

var gridSwiper = new Swiper('.grid-swiper', {
  slidesPerView: 1.3,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 4.1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})
