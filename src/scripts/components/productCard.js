export function createProductCard (image, price, oldPrice, productsBrand, productsName, id) {
  const productCard = document.createElement('div')
  productCard.className = 'product-card'

  const productImage = document.createElement('img')
  productImage.className = 'product-card__image'
  productImage.alt = 'product image'
  productImage.src = `${image}`
  productCard.append(productImage)

  const priceBox = document.createElement('div')
  priceBox.className = 'product-card__price-box'
  productCard.append(priceBox)

  const productPrice = document.createElement('span')
  productPrice.className = 'product-card__price'
  productPrice.innerText = `${price} ₽ `
  priceBox.append(productPrice)

  const productDiscount = document.createElement('span')
  productDiscount.className = 'product-card__discount'
  productDiscount.innerText = `-${Math.round((price * 100) / oldPrice)}% `
  priceBox.append(productDiscount)

  const productOldPrice = document.createElement('span')
  productOldPrice.className = 'product-card__old-price'
  productOldPrice.innerText = `${oldPrice} ₽ `
  priceBox.append(productOldPrice)

  const productDescription = document.createElement('div')
  productDescription.className = 'product-card__product-description-box'
  productCard.append(productDescription)

  const productBrand = document.createElement('span')
  productBrand.className = 'product-card__product-brand'
  productBrand.innerText = `${productsBrand} ·`
  productDescription.append(productBrand)

  const productName = document.createElement('span')
  productName.className = 'product-card__product-name'
  productName.innerText = `${productsName}`
  productDescription.append(productName)

  const basketButton = document.createElement('button')
  basketButton.className = 'product-card__button'
  basketButton.id = `${id}`
  basketButton.type = 'button'
  basketButton.innerText = 'В корзину'
  productCard.append(basketButton)

  return productCard
}
