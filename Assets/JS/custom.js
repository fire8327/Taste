let prev = document.querySelector(".categories-slider-prev");
let next = document.querySelector(".categories-slider-next");
let btn = document.querySelector(".buttons");

if (prev.classList.contains("swiper-button-disabled") && next.classList.contains("swiper-button-lock")) {
    btn.classList.add("hidden");
}

/* navigation */
/*jshint esnext: true */
const toggler1 = document.getElementById("toggler1");
const toggler2 = document.getElementById("toggler2");
const close = document.getElementById("close");
const mNav = document.getElementById("mobile__nav");
const body = document.getElementsByTagName("body")[0];

toggler1.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  body.classList.toggle("overflow-x-hidden");
});
toggler2.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  body.classList.toggle("overflow-x-hidden");
});
close.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  body.classList.toggle("overflow-x-hidden");
});

/* search */
const search = document.getElementById("search");
const close_search = document.getElementById("close_search");
const search_block = document.getElementById("search_block");

search.addEventListener("click", () => {
  search_block.classList.remove("opacity-0");
  search_block.classList.remove("-translate-y-full");
});
close_search.addEventListener("click", () => {
  search_block.classList.add("opacity-0");
  search_block.classList.add("-translate-y-full");
});

/* back to top */
const toTopButton = document.getElementById("to-top-button");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}