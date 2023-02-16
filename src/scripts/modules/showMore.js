export async function showCards (showMoreBtn) {
  const cards = Array.from(document.querySelectorAll('.productCard'))
  showMoreBtn.classList.add('hidden')
  if (window.innerWidth > 1043) {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 14) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  } else if (window.innerWidth <= 1043 && window.innerWidth > 443) {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 7) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  } else {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 2) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  }
}

export async function handlerShowMore (showMoreBtn) {
  const cards = Array.from(document.querySelectorAll('.productCard'))
  cards.forEach((item) => item.classList.remove('hidden'))
  showMoreBtn.classList.add('hidden')
}
