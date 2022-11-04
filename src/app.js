const notificationToggler = document.querySelector(".nav-toggler-btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");

notificationToggler.addEventListener("click", () => {
  navLinks.classList.contains("mob-active")
    ? navLinks.classList.remove("mob-active")
    : navLinks.classList.add("mob-active");
});

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};
const navObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio < 1) {
      nav.classList.remove("scroll-active");
      navLinks.classList.remove("scroll-active");
    } else if (!entry.isIntersecting) {
      nav.classList.add("scroll-active");
      navLinks.classList.add("scroll-active");
    }
  });
}, options);
navObserver.observe(header);

// aos animation
try {
  AOS.init();
} catch (error) {}
