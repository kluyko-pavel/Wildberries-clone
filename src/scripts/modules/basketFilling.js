import { getDataLocalStorage } from './utils.js'
import { createBasket } from '../components'
import { handlerModal, handlerCloseModal } from './createModal.js'
import { createProductCards } from './index.js'

export function basketFilling () {
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  const delButt = document.querySelector('.total-window__remove-btn')
  delButt.addEventListener('click', handlerClearBasket)
  return handlerModal(result)
}

export async function handlerClearBasket () {
  handlerCloseModal()
  localStorage.clear()
  createProductCards()
  const totalPrice = 0
  return handlerModal(createBasket(totalPrice))
}
