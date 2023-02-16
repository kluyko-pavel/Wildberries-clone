import { addBannerEventListeners, handlerRenderSearchResult, createProductCards, getCurrentProduct } from '../scripts/modules/index.js'
const cardsContainer = document.querySelector('.product-cards__container')
const formInput = document.querySelector('.main-header__search-input')

export function initApp () {
  createProductCards()
  addBannerEventListeners()
  cardsContainer.addEventListener('click', getCurrentProduct)
  formInput.addEventListener('input', handlerRenderSearchResult)
}
