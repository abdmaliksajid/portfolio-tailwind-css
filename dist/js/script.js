//navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#totop");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
//akhir navbar

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu1 = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu1.classList.toggle("hidden");
});

// setelah hamburger

//Klik diluar hamburgernya
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu1) {
    hamburger.classList.remove("hamburger-active");
    navMenu1.classList.add("hidden");
  }
});

// dark mode toggle

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
