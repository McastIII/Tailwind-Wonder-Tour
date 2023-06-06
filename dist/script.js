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

//coffee nav
const starNav = document.querySelectorAll(".discover__nav__link");
const starContent = document.querySelectorAll(".discover__tab__content");
starNav.forEach((nav) => {
    nav.addEventListener("click", () => {
    removeActiveStar();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
    });
});

function removeActiveStar() {
  starNav.forEach((nav) => {
  nav.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((nav) => {
  nav.classList.remove("active");
  });
}

// // Get the button
// let mybutton = document.getElementById("roll-up");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
// 		mybutton.style.display = "block";
// 	} else {
// 		mybutton.style.display = "none";
// 	}
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// }