import Swiper from "swiper";
import { Navigation, Scrollbar, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Scrollbar, Thumbs]);

const newsSlider = document.querySelector(".news-slider");
const productsSlider = document.querySelector(".products-slider");
// const cardSlider = document.querySelector(".card-slider");

new Swiper(newsSlider, {
  // slidesPerView: 1.5,
  spaceBetween: 24,
  scrollbar: {
    el: ".news-slider__scroll",
    draggable: true,
  },
  navigation: {
    nextEl: ".news-slider__btn--next",
    prevEl: ".news-slider__btn--prev",
  },
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
});

new Swiper(productsSlider, {
  slidesPerView: 4,
  spaceBetween: 40,
});

const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 6,
	spaceBetween: 16,
	loopedSlides: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	loop: true,
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let mySwiper = new Swiper(slider, {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: mySwiperNav,
	}
})
