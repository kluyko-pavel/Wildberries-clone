import { addBannerEventListeners, addSearchListener, createProductCards, addListenerOnSeeAllButton } from '../scripts/modules/index.js'

export function initApp () {
  createProductCards()
  addBannerEventListeners()
  addSearchListener()
  addListenerOnSeeAllButton()
}
