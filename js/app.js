"use strict";

const nav = document.querySelector(".custom-nav");

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 1) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
}

window.addEventListener("scroll", fixNav);
