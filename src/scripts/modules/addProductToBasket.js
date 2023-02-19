import { setDataLocalStorage, getDataLocalStorage } from './utils.js'
import { createProductCards } from './index.js'
const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

export async function handlerGetCurrentProduct (event) {
  if (!event.target.matches('.product-card__button')) {
    return event.target
  }
  const cardsInBasket = getDataLocalStorage('cards')
  const cardsWithChangedButtons = getDataLocalStorage('changeButton')
  const cardId = event.target.id
  const res = await fetch(URL)
  const cards = await res.json()

  if (cardsWithChangedButtons.length > 0) {
    const currentProduct = cardsWithChangedButtons[cardId - 1]
    cardsButtonChange(currentProduct, cardsWithChangedButtons)
    cardsInBasket.push(currentProduct)
    setDataLocalStorage('cards', cardsInBasket)
    createProductCards()
  } else {
    const currentProduct = cards[cardId - 1]
    cardsButtonChange(currentProduct, cards)
    cardsInBasket.push(currentProduct)
    setDataLocalStorage('cards', cardsInBasket)
    createProductCards()
  }
}

function cardsButtonChange (currentProduct, array) {
  currentProduct.inBasket = !currentProduct.inBasket
  setDataLocalStorage('changeButton', array)
}
