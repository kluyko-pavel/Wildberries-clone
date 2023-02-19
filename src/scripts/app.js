import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerModal,
  handlerRenderSearchResult,
  createProductCards,
  getCurrentProduct
} from '../scripts/modules/index.js'
import {
  createPhoneBtn,
  createTopScrollBtn,
  createShowMoreBtn,
  createBasket,
  createBasketCard
} from '../scripts/components/index.js'
// import { createOrderingModal } from './components/ordering.js'

export function initApp () {
  const basket = createBasket()
  const basketBtn = document.querySelector('.main-header__basket')
  basketBtn.addEventListener('click', () => handlerModal(basket))

  // createOrderingModal()

  addBannerEventListeners()

  createProductCards()

  const formInput = document.querySelector('.main-header__search-input')
  formInput.addEventListener('input', handlerRenderSearchResult)

  const cardsContainer = document.querySelector('.product-cards__container')
  cardsContainer.addEventListener('click', getCurrentProduct)
  const topButton = createTopScrollBtn()
  const phoneButton = createPhoneBtn()
  document.documentElement.append(topButton, phoneButton)
  window.addEventListener('scroll', () => handlerShowScrollButton(topButton))
  topButton.addEventListener('click', handlerScrollTop)

  createBasketCard('https://basket-05.wb.ru/vol774/part77426/77426595/images/c246x328/1.webp', '28', '17', 'BMCase', 'Силиконовый чехол картхолдер для карт, прозрачный кейс бампер на Apple iPhone 7,8', '1'
  )
  createBasketCard('https://basket-01.wb.ru/vol128/part12801/12801489/images/c246x328/1.webp', '120', '84', 'United Colors of Benetton', 'Футболка хлопок однотонная', '1'
  )
}
