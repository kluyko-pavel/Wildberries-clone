import { createProductCard } from '../components/index.js'

export function renderCard (cards) {
  document.querySelector('.product-cards__container').innerHTML = ''
  cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id }) => {
    const productCard = createProductCard(image, price, oldPrice, productsBrand, productsName, id)
    document.querySelector('.product-cards__container').append(productCard)
  })
}
