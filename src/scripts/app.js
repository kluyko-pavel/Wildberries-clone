import { addBannerEventListeners } from '../scripts/modules/index.js'
import { createProductCard } from '../scripts/components/index.js'
// import { getLocalStorage, setLocalStorage } from './utils.js'

export function initApp () {
  createProductCard()
  addBannerEventListeners()
  // getLocalStorage()
  // setLocalStorage()
}





