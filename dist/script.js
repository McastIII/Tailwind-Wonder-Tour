// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");


toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    three.classList.remove("open");
    quote.classList.remove("open");

 
});

const three = document.querySelector(".ellipsis");
const quote = document.querySelector(".header__details");
three.addEventListener("click", () => {
  three.classList.toggle("open");
  quote.classList.toggle("open");
  toggleMenu.classList.remove("open");
    mobileNav.classList.remove("open");
    header.classList.remove("open");
});

//drop down
const head = document.querySelectorAll(".header__item a");
head.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});