import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction"
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
console.log("Hello world!");