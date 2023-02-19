import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerModal,
  handlerRenderSearchResult,
  createProductCards,
  getCurrentProduct
} from '../scripts/modules/index.js'
import { createPhoneBtn, createTopScrollBtn, createBasket } from '../scripts/components/index.js'

export function initApp () {
  const basket = createBasket()
  const basketBtn = document.querySelector('.main-header__basket')
  basketBtn.addEventListener('click', () => handlerModal(basket))

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
}
