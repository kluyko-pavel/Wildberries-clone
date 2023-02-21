import { getDataLocalStorage, setDataLocalStorage } from './utils'

import { renderCardsInBasket } from './renderCardInbasket'
import { createProductCards } from './createProductCards'
import { handlerModal } from './createModal'
import { basketFilling } from './basketFilling'
import { basketProductsCounter } from './basketProductCount'

export function handlerDeleteCurrentProductFromBasket (event) {
  if (event.target.className === 'basket-card-controls__remove-btn-icon') {
    const currentProduct = event.target.closest('.basket-card')
    const addedToBasketCards = getDataLocalStorage('cards')
    const cardsWithoutDeleted = addedToBasketCards.filter((card) => card.id !== currentProduct.id)
    const cardsWithChangedButtons = getDataLocalStorage('changeButton')
    const deletedCardButtonChange = cardsWithChangedButtons.map((card) => {
      if (card.id === currentProduct.id) {
        card.inBasket = !card.inBasket
      }
      return card
    })
    setDataLocalStorage('changeButton', deletedCardButtonChange)
    setDataLocalStorage('cards', cardsWithoutDeleted)
    basketProductsCounter()
    renderCardsInBasket(cardsWithoutDeleted)
    createProductCards()
    document.querySelector('.modal-background').remove()
    handlerModal(basketFilling())
  }
}
