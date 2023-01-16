let prev = document.querySelector(".categories-slider-prev");
let next = document.querySelector(".categories-slider-next");
let btn = document.querySelector(".buttons");

if (prev.classList.contains("swiper-button-disabled") && next.classList.contains("swiper-button-lock")) {
    btn.classList.add("hidden");
}