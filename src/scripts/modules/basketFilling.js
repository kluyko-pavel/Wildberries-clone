import { getDataLocalStorage } from './utils.js'
import { createBasket } from '../components'
import { handlerModal, handlerCloseModal } from './createModal.js'
import { createProductCards } from './index.js'
import { createOrderingModal } from '../components/ordering.js'
import { createErrorOrderingModal } from '../components/errorOrdering.js'

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

function orderModal () {
  if (localStorage.getItem('cards')) {
    const orderModal = createOrderingModal()
    return orderModal
  } else {
    const errorOrder = createErrorOrderingModal()
    return errorOrder
  }
}
export function basketFilling () {
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  const delButt = document.querySelector('.total-window__remove-btn')
  delButt.addEventListener('click', handlerClearBasket)
  document.querySelector('.total-window__order-btn').addEventListener('click', () => handlerModal(orderModal()))
  return result
}
