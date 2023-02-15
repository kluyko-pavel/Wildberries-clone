import { search, renderCard } from './index.js'

const tittle = document.querySelector('.product-cards__tittle')
const formInput = document.querySelector('.main-header__search-input')

const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

// Функция добавляет задержку для инпута
function debounce (func, waitTime) {
  let timeout
  return function () {
    const funcCall = () => { func.apply(this, [...arguments]) }
    clearTimeout(timeout)
    timeout = setTimeout(funcCall, waitTime)
  }
}

async function renderSearchResult (event) {
  const inputText = event.target.value
  const res = await fetch(URL)
  const cards = await res.json()
  if (inputText.trim().length > 0) {
    const searchCards = search(cards, inputText)
    renderCard(searchCards)
    document.querySelector('.product-cards__container').style.maxHeight = 'none'
    tittle.innerText = 'Результат поиска'
    document.querySelector('.banner').style.display = 'none'
    document.querySelector('.product-cards__see-all-button').style.display = 'none'
    if (searchCards.length === 0) {
      tittle.innerText = 'К сожалению, такого товара нет... '
    }
  } else {
    tittle.innerText = 'Хиты продаж'
    document.querySelector('.banner').style.display = 'block'
    document.querySelector('.product-cards__container').style.maxHeight = '730px'
    document.querySelector('.product-cards__see-all-button').style.display = 'block'
    renderCard(cards)
  }
}

const handlerRenderSearchResult = debounce(renderSearchResult, 1000)

export function addSearchListener () {
  formInput.addEventListener('input', handlerRenderSearchResult)
}
