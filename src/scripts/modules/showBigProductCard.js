import { renderBigProductCard } from './index.js'
const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

export async function handlerShowBigCard (event) {
  if (event.target.className === 'product-card__image') {
    const res = await fetch(URL)
    const cards = await res.json()
    const currentCard = cards.filter((card) => +card.id === +event.target.id)
    renderBigProductCard(currentCard)
  }
}
