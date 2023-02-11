import { addBannerEventListeners } from '../scripts/modules/index.js'
import { createProductCard } from '../scripts/components/index.js'

export function initApp () {
  createProductCard()
  addBannerEventListeners()
}
