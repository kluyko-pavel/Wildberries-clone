import { getDataLocalStorage } from './utils.js'
import { createBasket } from '../components'
import { handlerModal, handlerCloseModal } from './createModal.js'
import { createProductCards, handlerChangeCardsInBasketQuantity, renderCardsInBasket, handlerDeleteCurrentProductFromBasket, basketProductsCounter } from './index.js'
import { createOrderingModal } from '../components/ordering.js'

export function basketFilling () {
  const modalOrder = createOrderingModal()
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  renderCardsInBasket(addedToBasketCards)
  document.querySelector('.basket-window__cards-container').addEventListener('click', handlerDeleteCurrentProductFromBasket)
  document.querySelector('.basket-window__cards-container').addEventListener('click', handlerChangeCardsInBasketQuantity)
  const deleteButton = document.querySelector('.total-window__remove-btn')
  deleteButton.addEventListener('click', handlerClearBasket)
  // document.querySelector('.total-window__order-btn').addEventListener('click', () => handlerModal(modalOrder))
  document.querySelector('.total-window__order-btn').addEventListener('click', () => handlerModal(modalOrder))
  return result
}

export async function handlerClearBasket (event) {
  handlerCloseModal(event)
  localStorage.clear()
  createProductCards()
  const totalPrice = 0
  basketProductsCounter()
  return handlerModal(createBasket(totalPrice))
}
