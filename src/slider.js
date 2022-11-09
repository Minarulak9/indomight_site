const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector("#slider");
const sliders = document.querySelectorAll(".slide");
let sliderWidth = sliders.length * (300 + 26);
let initial = 50;
slider.style.width = `calc(${sliderWidth}px + 2rem`;

let autoSlide;
function autoSlider(px) {
  let sliderContainerWidth = sliderContainer.getBoundingClientRect().width;
  autoSlide = setInterval(() => {
    // console.log(slider.style.transform);
    if (sliderWidth + initial < sliderContainerWidth ) {
      clearInterval(autoSlide);
      setTimeout(() => {
        initial = 50;
        autoSlider(0.2);
      }, 3000);
    } else {
      slider.style.transform = `translateX(${(initial -= px)}px)`;
    }
  }, 0);
}

let options1 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
const sliderObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        clearInterval(autoSlide);
        autoSlider(0.2);
      }, 3000);
      sliderObserver.disconnect();
    }
  });
}, options1);
sliderObserver.observe(slider);

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
