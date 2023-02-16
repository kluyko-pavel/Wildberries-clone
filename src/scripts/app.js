import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerShowMore,
  handlerModal,
  showCards
} from '../scripts/modules/index.js'
import { createPhoneBtn, createTopScrollBtn, createShowMoreBtn, createBasket } from '../scripts/components/index.js'

export function initApp () {
  const basket = createBasket()

  const basketBtn = document.querySelector('.main-header__basket')
  basketBtn.addEventListener('click', () => handlerModal(basket))

  addBannerEventListeners()

  const cardsContainer = document.querySelector('.product-cards__container')
  const topButton = createTopScrollBtn()
  const phoneButton = createPhoneBtn()
  document.documentElement.append(topButton, phoneButton)
  window.addEventListener('scroll', () => handlerShowScrollButton(topButton))
  topButton.addEventListener('click', handlerScrollTop)

  const showMoreBtn = createShowMoreBtn()
  cardsContainer.append(showMoreBtn)
  const cards = Array.from(document.querySelectorAll('.product-card'))
  showMoreBtn.addEventListener('click', () => handlerShowMore(showMoreBtn, cards))
  showCards(showMoreBtn, cards)
  window.addEventListener('resize', () => showCards(showMoreBtn, cards))
}
