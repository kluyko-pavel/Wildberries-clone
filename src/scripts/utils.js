export function getLocalStorage () {
  return JSON.parse(localStorage.getItem('key')) || []
  }
  

  export function setLocalStorage (items = []) {
    localStorage.setItem('key', JSON.stringify(items))
  }
  