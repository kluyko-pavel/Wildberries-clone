const cardContainer = document.querySelector('.product-cards__container')
const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'

// Функция получает объект с карточкой, у которой была нажата кнопка "в корзину".
// Дальше нужно будет просто закинуть эту переменную в функция рендер картчоки в корзине
async function getCurrentProduct (event) {
  if (!event.target.matches('.product-card__button')) {
    return event.target
  }
  const cardId = event.target.id
  const res = await fetch(URL)
  const cards = await res.json()
  const currentProduct = cards[cardId - 1]
  return currentProduct
}
cardContainer.addEventListener('click', getCurrentProduct)
