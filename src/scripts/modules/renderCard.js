import { createProductCard } from '../components/index.js'
const cardsContainer = document.querySelector('.product-cards__container')

export function renderCard (cards) {
  cardsContainer.innerHTML = ''
  cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id }) => {
    const productCard = createProductCard(image, price, oldPrice, productsBrand, productsName, id)
    cardsContainer.append(productCard)
  })
}
