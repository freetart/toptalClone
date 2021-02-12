"use strict";
// add background to nav on scroll
const nav = document.querySelector(".custom-nav");

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 1) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
}

window.addEventListener("scroll", fixNav);

// collapse navbar on link click
const navLink = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});
