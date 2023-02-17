import { renderCard, showCards, handlerShowMore } from './index.js'
import { createShowMoreBtn } from '../components/index.js'

const URL = 'https://63e9269e811db3d7eff7f6ff.mockapi.io/products'
const cardsContainer = document.querySelector('.product-cards__container')

export async function createProductCards () {
  const res = await fetch(URL)
  const cards = await res.json()
  renderCard(cards)

  const showMoreBtn = createShowMoreBtn()
  cardsContainer.append(showMoreBtn)
  const cardsArr = Array.from(document.querySelectorAll('.product-card'))

  showCards(showMoreBtn, cardsArr)
  showMoreBtn.addEventListener('click', () => handlerShowMore(showMoreBtn, cardsArr))
  window.addEventListener('resize', () => showCards(showMoreBtn, cardsArr))
}
