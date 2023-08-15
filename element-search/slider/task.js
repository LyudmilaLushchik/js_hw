const sliderItems = document.querySelectorAll('.slider__item');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
let currentIndex = 0;

function setActiveSlide(index) {
  sliderItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('slider__item_active');
    } else {
      item.classList.remove('slider__item_active');
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  setActiveSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  setActiveSlide(currentIndex);
}

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);