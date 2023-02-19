import { getDataLocalStorage } from './utils.js'
import { createBasket } from '../components'
import { handlerModal, handlerCloseModal } from './createModal.js'
import { createProductCards } from './index.js'
import { createOrderingModal } from '../components/ordering.js'

export function basketFilling () {
  const modalOrder = createOrderingModal()
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  const delButt = document.querySelector('.total-window__remove-btn')
  delButt.addEventListener('click', handlerClearBasket)
  document.querySelector('.total-window__order-btn').addEventListener('click', () => handlerModal(modalOrder))
  return result
}

export async function handlerClearBasket (event) {
  handlerCloseModal(event)
  localStorage.clear()
  createProductCards()
  const totalPrice = 0
  return handlerModal(createBasket(totalPrice))
}
