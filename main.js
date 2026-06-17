// animation scroll
const lenis = new Lenis({
  duration: 2,
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    lenis.scrollTo(target, {
      duration: 2,
    });
  });
});

// scroll up
const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }
};

// togle class active
const navbarNav = document.querySelector(".nav-link");
// ketika humbarger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar
const hamburger = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// alert
function tutup() {
  document.getElementById("pop-up").style.display = "none";
}

window.onload = function () {
  document.getElementById("pop-up").style.display = "block";
};
