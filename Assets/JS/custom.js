let prev = document.querySelector(".categories-slider-prev");
let next = document.querySelector(".categories-slider-next");
let btn = document.querySelector(".buttons");

if (prev.classList.contains("swiper-button-disabled") && next.classList.contains("swiper-button-lock")) {
    btn.classList.add("hidden");
}

/* navigation */
/*jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const body = document.getElementsByTagName("body")[0];

toggler.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  body.classList.toggle("overflow-x-hidden");
});