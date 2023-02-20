export function emptyBasket () {
  const emptyBlock = document.createElement('div')
  emptyBlock.className = 'empty-basket'

  const basketPic = document.createElement('img')
  basketPic.className = 'empty-basket__image'
  basketPic.src = 'https://cdn.icon-icons.com/icons2/1760/PNG/512/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.png'
  emptyBlock.append(basketPic)

  const emptyBasket = document.createElement('h3')
  emptyBasket.className = 'empty-basket__text'
  emptyBasket.innerText = 'Ваша корзина пуста ... '
  emptyBlock.append(emptyBasket)

  return emptyBlock
}
