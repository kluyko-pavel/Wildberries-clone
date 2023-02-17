import { addBannerEventListeners } from '../scripts/modules/index.js'
import { createProductCard } from '../scripts/components/index.js'
// import { createAuthorizationWindow } from './components/authorizationWindow.js'
import { createOrderingModal } from './components/ordering.js'

export function initApp () {
  createProductCard()
  addBannerEventListeners()
  // createAuthorizationWindow()
  createOrderingModal()
  // getLocalStorage()
  // setLocalStorage()
}


