import { addBannerEventListeners } from '../scripts/modules/index.js'
import { createProductCard } from '../scripts/components/index.js'
import { createBasket } from '../scripts/components/basket.js'

export function initApp () {
  createProductCard()
  addBannerEventListeners()
  createBasket()
}
