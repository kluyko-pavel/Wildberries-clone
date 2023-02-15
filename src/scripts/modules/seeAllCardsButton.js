const seeAllButton = document.querySelector('.product-cards__see-all-button')

function handlerShowAllCards (event) {
  if (document.querySelector('.product-cards__container').style.maxHeight === 'none') {
    document.querySelector('.product-cards__container').style.maxHeight = '730px'
    event.target.innerText = 'Показать ещё 🠗'
  } else {
    document.querySelector('.product-cards__container').style.maxHeight = 'none'
    event.target.innerText = 'Скрыть 🠕'
  }
}

export function addListenerOnSeeAllButton () {
  seeAllButton.addEventListener('click', handlerShowAllCards)
}
