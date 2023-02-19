import trashIcon from '../../assets/icons/trash.svg'
export function createBasketCard (image, price, oldPrice, productsBrand, productsName, id) {
  const basketCard = document.createElement('div')
  basketCard.className = 'basketCard'
  basketCard.id = `${id}`
  document.body.prepend(basketCard) // Вставил сюда для наглядности, чтобы видеть, что получается

  const contentBlock = document.createElement('div')
  contentBlock.className = 'content-block'
  basketCard.append(contentBlock)

  const basketItem = document.createElement('div')
  basketItem.className = 'basket-item'
  contentBlock.append(basketItem)

  const basketItemImage = document.createElement('div')
  basketItemImage.className = 'basket-item-image'
  basketItem.append(basketItemImage)

  const basketItemImageIcon = document.createElement('img')
  basketItemImageIcon.className = 'basket-item-image__icon'
  basketItemImageIcon.alt = 'product image'
  basketItemImageIcon.src = `${image}`
  basketItemImage.append(basketItemImageIcon)

  const basketItemInfo = document.createElement('div')
  basketItemInfo.className = 'basket-item-info'
  basketItem.append(basketItemInfo)

  const basketItemInfoName = document.createElement('h4')
  basketItemInfoName.className = 'basket-item-info__name'
  basketItemInfoName.innerText = `${productsName}`
  basketItemInfo.append(basketItemInfoName)

  const basketItemInfoDetails = document.createElement('h5')
  basketItemInfoDetails.className = 'basket-item-info__details'
  basketItemInfoDetails.innerText = `${productsBrand}`
  basketItemInfo.append(basketItemInfoDetails)

  const priceBlock = document.createElement('div')
  priceBlock.className = 'price-block'
  basketCard.append(priceBlock)

  const basketItemControlsContainer = document.createElement('div')
  basketItemControlsContainer.className = 'basket-item-controls-container'
  priceBlock.append(basketItemControlsContainer)

  const basketItemCounter = document.createElement('div')
  basketItemCounter.className = 'basket-item-counter'
  basketItemControlsContainer.append(basketItemCounter)

  const counterBtnMinus = document.createElement('button')
  counterBtnMinus.className = 'basket-item-counter__minus'
  counterBtnMinus.type = 'button'
  counterBtnMinus.innerText = '−'
  basketItemCounter.append(counterBtnMinus)

  const counterValue = document.createElement('div')
  counterValue.className = 'basket-item-counter__value'
  counterValue.innerText = '1'
  basketItemCounter.append(counterValue)

  const counterBtnPlus = document.createElement('button')
  counterBtnPlus.className = 'basket-item-counter__plus'
  counterBtnPlus.type = 'button'
  counterBtnPlus.innerText = '+'
  basketItemCounter.append(counterBtnPlus)

  const basketItemRemoveBtn = document.createElement('button')
  basketItemRemoveBtn.className = 'basket-item-controls-remove'
  basketItemRemoveBtn.type = 'button'
  basketItemControlsContainer.append(basketItemRemoveBtn)

  const basketItemRemoveBtnIcon = new Image()
  basketItemRemoveBtnIcon.className = 'trash'
  basketItemRemoveBtnIcon.src = trashIcon
  basketItemRemoveBtn.append(basketItemRemoveBtnIcon)

  const basketItemPriceContainer = document.createElement('div')
  basketItemPriceContainer.className = 'basket-item-price-container'
  priceBlock.append(basketItemPriceContainer)

  const basketItemPriceNew = document.createElement('p')
  basketItemPriceNew.className = 'basket-item-price-new'
  basketItemPriceNew.innerText = `${price}`
  basketItemPriceContainer.append(basketItemPriceNew)

  const basketItemPriceOld = document.createElement('span')
  basketItemPriceOld.className = 'basket-item-price-old'
  basketItemPriceOld.innerText = `${oldPrice}`
  basketItemPriceContainer.append(basketItemPriceOld)

  return basketCard
}
