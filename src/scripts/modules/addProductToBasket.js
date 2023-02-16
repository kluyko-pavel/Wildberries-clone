const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

export async function getCurrentProduct (event) {
  if (!event.target.matches('.product-card__button')) {
    return event.target
  }
  const basketCardsArray = JSON.parse(localStorage.getItem('cards')) ?? []
  const cardId = event.target.id
  const res = await fetch(URL)
  const cards = await res.json()
  const currentProduct = cards[cardId - 1]
  basketCardsArray.push(currentProduct)
  localStorage.setItem('cards', JSON.stringify(basketCardsArray))
}
