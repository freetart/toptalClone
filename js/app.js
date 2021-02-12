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

// show talent

// Show an element
var show = function (elem) {
  elem.classList.add("is-visible");
};

// Hide an element
var hide = function (elem) {
  elem.classList.remove("is-visible");
};

// Toggle element visibility
var toggle = function (elem) {
  elem.classList.toggle("is-visible");
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    console.log(content);

    // Toggle the content
    toggle(content);
  },
  false
);
