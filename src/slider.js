const slider = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slide");
let screen = window.innerWidth;
let sliderWidth = sliders.length * 800;
let initial = 500;
slider.style.width = `calc(${sliderWidth}px + 2rem`;

let autoSlide;
if (screen < 800) {
  sliderWidth = sliders.length * 350;
  initial = 200;
}
function autoSlider(px) {
  autoSlide = setInterval(() => {
    // console.log(slider.style.transform);
    if (sliderWidth + initial < 0) {
      initial = 500;
    }
    slider.style.transform = `translateX(${(initial -= px)}px)`;
  }, 0);
}
autoSlider(0.2);
slider.addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});
slider.addEventListener("mouseout", () => {
  clearInterval(autoSlide);
  autoSlider(0.2);
});
slider.addEventListener("touchstart", () => {
  clearInterval(autoSlide);
});
slider.addEventListener("touchend", () => {
  clearInterval(autoSlide);
  autoSlider(0.2);
});
