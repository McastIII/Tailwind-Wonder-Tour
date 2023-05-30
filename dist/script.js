// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
const blurr = document.querySelector(".blur");


toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    blurr.classList.toggle("open");
    
});

const three = document.querySelector(".ellipsis");
const quote = document.querySelector(".header__details");
three.addEventListener("click", () => {
  three.classList.toggle("open");
  quote.classList.toggle("open");
});

//drop down
const head = document.querySelectorAll(".header__item h4");
head.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});
