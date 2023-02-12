import { search, renderCard } from './index.js'

const tittle = document.querySelector('.product-cards__tittle')
const formInput = document.querySelector('.main-header__search-input')

const cards = [
  {
    image: 'https://basket-09.wb.ru/vol1311/part131142/131142918/images/c516x688/1.jpg',
    price: 10,
    oldPrice: 20,
    productsBrand: 'Xiaomi',
    productsName: 'Планшет Redmi Pad 4GB+128GB '
  },
  {
    image: 'https://basket-01.wb.ru/vol76/part7689/7689884/images/c516x688/2.webp',
    price: 10,
    oldPrice: 20,
    productsBrand: 'Garnier',
    productsName: 'Комплексный несмываемый крем-уход 10 в 1'
  },
  {
    image: 'https://basket-09.wb.ru/vol1222/part122205/122205202/images/c516x688/1.jpg',
    price: 160,
    oldPrice: 240,
    productsBrand: 'LED',
    productsName: 'Светильник напольный светодиодный неон'
  },
  {
    image: 'https://basket-05.wb.ru/vol1007/part100796/100796346/images/c516x688/3.jpg',
    price: 120,
    oldPrice: 220,
    productsBrand: 'City Мебель',
    productsName: 'Бескаркасное Кресло Эссен'
  }
]

// Функция добавляет задержку для инпута
function debounce (func, waitTime) {
  let timeout
  return function () {
    const funcCall = () => { func.apply(this, [...arguments]) }
    clearTimeout(timeout)
    timeout = setTimeout(funcCall, waitTime)
  }
}

function renderSearchResult (event) {
  const inputText = event.target.value
  if (inputText.trim().length > 0) {
    const searchCards = search(cards, inputText)
    renderCard(searchCards)
    tittle.innerText = 'Результат поиска'
    document.querySelector('.banner').style.display = 'none'
    if (searchCards.length === 0) {
      tittle.innerText = 'К сожалению, такого товара нет... '
    }
  } else {
    tittle.innerText = 'Хиты продаж'
    document.querySelector('.banner').style.display = 'block'
    renderCard(cards)
  }
}

const handlerRenderSearchResult = debounce(renderSearchResult, 1000)

export function addSearchListener () {
  formInput.addEventListener('input', handlerRenderSearchResult)
}
