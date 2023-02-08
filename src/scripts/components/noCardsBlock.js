export function noCardsBlock () {
  const noCards = document.createElement('p')
  noCards.className = 'product-cards__no-cards-block'
  document.querySelector('.product-cards__container').append(noCards)

  return noCards
}
