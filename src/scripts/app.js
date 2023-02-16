import { addBannerEventListeners } from '../scripts/modules/index.js'
import { createProductCard } from '../scripts/components/index.js'
import { createAuthorizationWindow } from './components/authorizationWindow.js'

export function initApp () {
  createProductCard()
  addBannerEventListeners()
  createAuthorizationWindow()
  // getLocalStorage()
  // setLocalStorage()
}


