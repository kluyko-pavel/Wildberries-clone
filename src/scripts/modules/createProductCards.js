import { renderCard } from './renderCard.js'

const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

export async function createProductCards () {
  const res = await fetch(URL)
  const cards = await res.json()
  renderCard(cards)
}
