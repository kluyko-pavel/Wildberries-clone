export function getDataLocalStorage () {
  if (localStorage.getItem('cards')) {
    return JSON.parse(localStorage.getItem('tasks'))
  } else {
    return []
  }
}

export function setDataLocalStorage (data) {
  localStorage.setItem('cards', JSON.stringify(data))
}
