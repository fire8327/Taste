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
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");
const mNav = document.getElementById("mobile__nav");
const body = document.getElementsByTagName("body")[0];

toggler1.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  mNav.classList.toggle("-z-30");
  body.classList.toggle("overflow-hidden");
  overlay.classList.toggle("hidden");
});
toggler2.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  mNav.classList.toggle("-z-30");
  body.classList.toggle("overflow-hidden");
  overlay.classList.toggle("hidden");
});
close.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  mNav.classList.toggle("-z-30");
  body.classList.toggle("overflow-hidden");
  overlay.classList.toggle("hidden");
});
overlay.addEventListener("click", () => {
  mNav.classList.toggle("opacity-0");
  mNav.classList.toggle("-z-30");
  body.classList.toggle("overflow-hidden");
  overlay.classList.toggle("hidden");
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
/* fixed header */
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const sublogo = document.getElementById("sublogo");
const signin = document.getElementById("signin");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      menu2.classList.add("fixed");
      menu2.classList.add("shadow-2xl");
      sublogo.classList.remove("hidden");
      signin.classList.remove("hidden");
    } else {
      menu2.classList.remove("fixed");
      menu2.classList.remove("shadow-2xl");
      sublogo.classList.add("hidden");
      signin.classList.add("hidden");
    }

    if (document.body.scrollTop > 68 || document.documentElement.scrollTop > 68) {
      menu1.classList.add("fixed");
      menu1.classList.add("shadow-2xl");
    } else {
      menu1.classList.remove("fixed");
      menu1.classList.remove("shadow-2xl");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}