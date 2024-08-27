import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
const swiper = new Swiper(".featuredArticle", {
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
//大家都在看
const swiper00 = new Swiper(".everyoneLook", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 1,
      slidesPerGroup: 0,
    },
  },
});
//品味生活
const swiper0 = new Swiper(".life", {
  slidesPerView: 1,
  slidesPerGroup: 0,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next1",
    prevEl: ".swiper-prev1"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});
//生活提案
const swiper2 = new Swiper(".lifeProposal", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 0,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 0,
    },
  },
});
//文章內容頁
const swiper3 = new Swiper(".extendArticle", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
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
      slidesPerView: 1,
      slidesPerGroup: 0,
    },
  },
});
console.log("Hello world!");