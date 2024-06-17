const slider = document.getElementById('slider');
const sliderImg = document.querySelectorAll('.slider__img');

let slideIndex = 0;

const showSlide = () => {
  if (sliderImg[slideIndex].classList.contains('slider__img_active')) {
    sliderImg[slideIndex].classList.remove('slider__img_active')
  };
  slideIndex += 1;
  if (slideIndex >= sliderImg.length) {
    slideIndex = 0;
  }
  if (!sliderImg[slideIndex].classList.contains('slider__img_active')) {
    sliderImg[slideIndex].classList.add('slider__img_active');
  };
};

setInterval(showSlide, 2000);