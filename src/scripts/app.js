import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerRenderSearchResult,
  createProductCards,
  handlerGetCurrentProduct,
  basketFilling,
  handlerModal,
  basketProductsCounter
} from '../scripts/modules/index.js'
import { createPhoneBtn, createTopScrollBtn } from '../scripts/components/index.js'

export function initApp () {
  const basketBtn = document.querySelector('.main-header__basket')
  basketBtn.addEventListener('click', () => handlerModal(basketFilling()))
  basketProductsCounter()
  addBannerEventListeners()

  createProductCards()

  const formInput = document.querySelector('.main-header__search-input')
  formInput.addEventListener('input', handlerRenderSearchResult)

  const cardsContainer = document.querySelector('.product-cards__container')
  cardsContainer.addEventListener('click', handlerGetCurrentProduct)

  const topButton = createTopScrollBtn()
  const phoneButton = createPhoneBtn()
  document.documentElement.append(topButton, phoneButton)
  window.addEventListener('scroll', () => handlerShowScrollButton(topButton))
  topButton.addEventListener('click', handlerScrollTop)
}
