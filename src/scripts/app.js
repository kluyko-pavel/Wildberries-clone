import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerShowMore,
  handlerModal,
  handlerRenderSearchResult,
  createProductCards,
  getCurrentProduct,
  showCards
} from '../scripts/modules/index.js'
import { createPhoneBtn, createTopScrollBtn, createShowMoreBtn, createBasket } from '../scripts/components/index.js'

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

  const showMoreBtn = createShowMoreBtn()
  cardsContainer.append(showMoreBtn)

  showCards(showMoreBtn)
  showMoreBtn.addEventListener('click', () => handlerShowMore(showMoreBtn))
  window.addEventListener('resize', () => showCards(showMoreBtn))
}
