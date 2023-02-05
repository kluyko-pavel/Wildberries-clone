const leftButton = document.querySelector('.slider-box__button-left')
const rightButton = document.querySelector('.slider-box__button-right')
const slideGallery = document.querySelector('.slider-box__line')
const sliderDots = document.querySelectorAll('.slider-box__dot')
const sliderBox = document.querySelector('.slider-box')

let count = 0

// Функция для смещения изображений вправо. При каждом клике счетчик увеличивается на 1, после чего
// изменятся стиль для контейнера с иозбражениям - контейнер смещается по оси Х на расстояние равное
// ширине контейнера умноженной на текущее значение счетчика
function handlerSlideRight () {
  count = count + 1
  if (count > (((document.querySelectorAll('.slider-box__image').length) - 1))) {
    count = 0
  }
  slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  dotsAtiveClassChange(count)
}
rightButton.addEventListener('click', handlerSlideRight)

// Функция для смещения изображений влево. Принцип действия такой же, как в функции выше,
// Только здесь счетчик наоборот уменьшается, а не увеличивается
function handlerSlideLeft () {
  count = count - 1
  if (count < 0) {
    count = (((document.querySelectorAll('.slider-box__image').length) - 1))
  }
  slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  dotsAtiveClassChange(count)
}
leftButton.addEventListener('click', handlerSlideLeft)

// Функция удаляет класс active для точек, и вешает его на нужную в данный момент
function dotsAtiveClassChange (count) {
  sliderDots.forEach(item => item.classList.remove('active-dot'))
  sliderDots[count].classList.add('active-dot')
}

// Функция для перелистывания изображений с помощью точек. Значение счетчика заменяется
// на индекс точки, по которой был совершен клик. Для этого я и добавил в html для точек id.
// Здесь так же меняется стиль контейнера, для его смещения по оси Х
function handlerChangeSlideByDots (event) {
  if (event.target.className === 'slider-box__dot' && 'slider-box__dot active-dot') {
    count = event.target.id
    dotsAtiveClassChange(count)
    slideGallery.style.transform = `translateX(${-count * sliderBox.offsetWidth}px)`
  }
}
document.querySelector('.slider-box__dots-set').addEventListener('click', handlerChangeSlideByDots)
