import { createBigProductCard } from '../components/bigProductCard'
import { handlerModal } from './createModal'

export function renderBigProductCard (cards) {
  cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id, inBasket }) => {
    const bigProductCard = createBigProductCard(image, price, oldPrice, productsBrand, productsName, id, inBasket)
    handlerModal(bigProductCard)
  })
}
