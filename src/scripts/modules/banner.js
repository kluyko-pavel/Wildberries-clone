const leftButton = document.querySelector('.slider-box__button-left')
const rightButton = document.querySelector('.slider-box__button-right')
const slideGallery = document.querySelector('.slider-box__line')
const sliderDots = document.querySelectorAll('.slider-box__dot')
const sliderBox = document.querySelector('.slider-box')
const sliderImages = document.querySelectorAll('.slider-box__image')
const sliderDotsSet = document.querySelector('.slider-box__dots-set')

let count = 0

function handlerSlideRight () {
  count = count + 1
  if (count > (sliderImages.length - 1)) {
    count = 0
  }
  slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  dotsAtiveClassChange(count)
}

function handlerSlideLeft () {
  count = count - 1
  if (count < 0) {
    count = sliderImages.length - 1
  }
  slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  dotsAtiveClassChange(count)
}

function dotsAtiveClassChange (count) {
  sliderDots.forEach(item => item.classList.remove('active-dot'))
  sliderDots[count].classList.add('active-dot')
}

function handlerChangeSlideByDots (event) {
  if (event.target.className === 'slider-box__dot' && 'slider-box__dot active-dot') {
    count = event.target.id
    dotsAtiveClassChange(count)
    slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  }
}

export function addBannerEventListeners () {
  rightButton.addEventListener('click', handlerSlideRight)
  leftButton.addEventListener('click', handlerSlideLeft)
  sliderDotsSet.addEventListener('click', handlerChangeSlideByDots)
}
