import { getDataLocalStorage } from './utils.js'
import { createBasket } from '../components'
import { handlerModal, handlerCloseModal } from './createModal.js'
import { createProductCards, orderModal } from './index.js'

export async function handlerClearBasket () {
  const modalBackground = document.querySelector('.modal-background')
  if (localStorage.getItem('cards')) {
    modalBackground.innerHTML = ''
    localStorage.clear()
    createProductCards()
    const totalPrice = 0
    modalBackground.append(createBasket(totalPrice))
    const closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click', (event) => handlerCloseModal(event))
    document.querySelector('.total-window__order-btn').addEventListener('click', () => handlerModal(orderModal()))
  }
}

export function basketFilling () {
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  const delButt = document.querySelector('.total-window__remove-btn')
  delButt.addEventListener('click', handlerClearBasket)
  const orderButt = document.querySelector('.total-window__order-btn')
  orderButt.addEventListener('click', () => handlerModal(orderModal()))
  return result
}
