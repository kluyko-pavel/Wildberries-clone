import { getDataLocalStorage, setDataLocalStorage } from './utils'

import { renderCardsInBasket } from './renderCardInbasket'
import { handlerModal } from './createModal'
import { basketFilling } from './basketFilling'

export function handlerChangeCardsInBasketQuantity (event) {
  const currentProduct = event.target.closest('.basket-card')
  const addedToBasketCards = getDataLocalStorage('cards')
  const allCardsWithNoChangedPrice = getDataLocalStorage('changeButton')
  const currentCardPrice = allCardsWithNoChangedPrice.find((card) => card.id === currentProduct.id).price

  if (event.target.className === 'basket-card-controls__item-counter-plus') {
    const cardsWithChangedCost = addedToBasketCards.map((card) => {
      if (card.id === currentProduct.id) {
        if (!card.count) {
          card.count = 1
        }
        card.count = card.count + 1
        card.price = card.price + currentCardPrice
      }
      return card
    })
    refreshBasket(cardsWithChangedCost)
  } else if (event.target.className === 'basket-card-controls__item-counter-minus') {
    const cardsWithChangedCost = addedToBasketCards.map((card) => {
      if (card.id === currentProduct.id) {
        if (card.count > 1) {
          if (card.id === currentProduct.id) {
            if (!card.count) {
              card.count = 1
            }
            card.count = card.count - 1
            card.price = card.price - currentCardPrice
          }
        }
      }
      return card
    })
    refreshBasket(cardsWithChangedCost)
  }
}

function refreshBasket (cardsWithChangedCost) {
  setDataLocalStorage('cards', cardsWithChangedCost)
  renderCardsInBasket(cardsWithChangedCost)
  document.querySelector('.modal-background').remove()
  handlerModal(basketFilling())
}
