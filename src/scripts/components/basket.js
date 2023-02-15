import basket from '../../assets/images/basket/product_1.png'

export function createBasket () {
  const basketLeftBlock = document.createElement('div')
  basketLeftBlock.className = 'basket-left-block'
  document.querySelector('.basket-container').append(basketLeftBlock)

  const basketLeftTitle = document.createElement('h2')
  basketLeftTitle.className = 'basket-left-block__title'
  basketLeftTitle.innerText = 'Корзина'
  basketLeftBlock.append(basketLeftTitle)

  const basketItems = document.createElement('div')
  basketItems.className = 'basket-items-container'
  // basketItems.attributes = '[active-basket-container]'
  basketLeftBlock.append(basketItems)

  const itemContainer = document.createElement('div')
  itemContainer.className = 'item-container'
  basketItems.append(itemContainer)

  const itemLeftContainer = document.createElement('div')
  itemLeftContainer.className = 'item-left-container'
  itemContainer.append(itemLeftContainer)

  const productCard = document.createElement('div')
  productCard.className = 'product-card'
  itemLeftContainer.append(productCard)

  const productCardImage = document.createElement('div')
  productCardImage.className = 'product-card-image'
  productCard.append(productCardImage)

  const productCardImageIcon = document.createElement('img')
  productCardImageIcon.className = 'product-card-image__icon'
  productCardImageIcon.alt = 'product image'
  productCardImageIcon.src = basket
  productCardImage.append(productCardImageIcon)

  const productInfo = document.createElement('div')
  productInfo.className = 'product-info'
  productCardImage.append(productInfo)

  const productInfoName = document.createElement('h4')
  productInfoName.className = 'product-info__name'
  productInfoName.innerText = 'Футболка UZcotton мужская'
  productInfo.append(productInfoName)

  const productInfoDetails = document.createElement('h5')
  productInfoDetails.className = 'product-info__details'
  productInfoDetails.innerText = 'OOO Вайлдберриз'
  productInfo.append(productInfoDetails)

  const itemRightContainer = document.createElement('div')
  itemRightContainer.className = 'item-right-container'
  itemContainer.append(itemRightContainer)

  const productControlsContainer = document.createElement('div')
  productControlsContainer.className = 'product-controls-container'
  itemRightContainer.append(productControlsContainer)

  const productCounter = document.createElement('product-counter')
  productCounter.className = 'product-counter'
  productControlsContainer.append(productCounter)

  const counterBtnMinus = document.createElement('button')
  counterBtnMinus.className = 'product-counter__minus'
  counterBtnMinus.type = 'button'
  counterBtnMinus.innerText = '-'
  productCounter.append(counterBtnMinus)

  const counterValue = document.createElement('div')
  counterValue.className = 'product-counter__value'
  counterValue.innerText = '1'
  productCounter.append(counterValue)

  const counterBtnPlus = document.createElement('button')
  counterBtnPlus.className = 'product-counter__plus'
  counterBtnPlus.type = 'button'
  counterBtnPlus.innerText = '+'
  productCounter.append(counterBtnPlus)

  const productRemoveBtn = document.createElement('button')
  productRemoveBtn.className = 'product-controls-remove'
  productRemoveBtn.type = 'button'
  productControlsContainer.append(productRemoveBtn)

  const productRemoveBtnIcon = document.createElement('img')
  productRemoveBtnIcon.className = 'trash'
  productRemoveBtnIcon.src = '../src/assets/icons/trash.svg'
  productRemoveBtn.append(productRemoveBtnIcon)

  const productPriceContainer = document.createElement('div')
  productPriceContainer.className = 'product-price-container'
  itemRightContainer.append(productPriceContainer)

  const productPriceNew = document.createElement('p')
  productPriceNew.className = 'product-price-new'
  productPriceNew.innerText = '180 Р'
  productPriceContainer.append(productPriceNew)

  const productPriceOld = document.createElement('span')
  productPriceOld.className = 'product-price-old'
  productPriceOld.innerText = '210 Р'
  productPriceContainer.append(productPriceOld)

  const basketRightBlock = document.createElement('div')
  basketRightBlock.className = 'basket-right-block'
  document.querySelector('.basket-container').append(basketRightBlock)

  const basketBgShadow = document.createElement('div')
  basketBgShadow.classList.add('basket-bg', 'shadow')
  basketRightBlock.append(basketBgShadow)

  const totalBasketContainer = document.createElement('div')
  totalBasketContainer.className = 'total-basket-container'
  basketBgShadow.append(totalBasketContainer)

  const totalTitle = document.createElement('h2')
  totalTitle.className = 'total-basket-container__title'
  totalTitle.innerText = 'Итого'
  totalBasketContainer.append(totalTitle)

  const totalProducts = document.createElement('div')
  totalProducts.className = 'total-basket-container__products'
  totalBasketContainer.append(totalProducts)

  const removeBasketBtn = document.createElement('button')
  removeBasketBtn.className = 'remove-btn'
  removeBasketBtn.type = 'button'
  removeBasketBtn.innerText = 'Очистить корзину'
  totalBasketContainer.append(removeBasketBtn)

  const payBasketBtn = document.createElement('button')
  payBasketBtn.className = 'pay-btn'
  payBasketBtn.type = 'button'
  payBasketBtn.innerText = 'Заказать'
  totalBasketContainer.append(payBasketBtn)

  const agreement = document.createElement('div')
  agreement.className = 'agreement'
  totalBasketContainer.append(agreement)

  const agreementText = document.createElement('span')
  agreementText.className = 'agreement__text'
  agreementText.innerText = 'Соглашаюсь'
  agreement.append(agreementText)

  const agreementRules = document.createElement('a')
  agreementRules.className = 'agreement__rules'
  agreementRules.innerText = 'c правилами пользования торговой площадки'
  agreementRules.href = 'https://www.wildberries.by/services/terms'
  agreement.append(agreementRules)

  const agreementReturn = document.createElement('a')
  agreementReturn.className = 'agreement__return'
  agreementReturn.innerText = 'и возврата'
  agreementReturn.href = 'https://www.wildberries.by/services/item-return'
  agreement.append(agreementReturn)
}
