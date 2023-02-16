import iconArrow from '../../assets/icons/btn-arrow.svg'
export const createTopScrollBtn = () => {
  const topButton = document.createElement('button')
  topButton.type = 'button'
  topButton.className = 'top-button'

  const buttonArrow = new Image()
  buttonArrow.className = 'top-button__arrow'
  buttonArrow.src = iconArrow
  topButton.append(buttonArrow)

  return topButton
}

export function createPhoneBtn () {
  const phoneButton = document.createElement('button')
  phoneButton.type = 'button'
  phoneButton.className = 'phone-button'

  const phoneLink = document.createElement('a')
  phoneLink.className = 'phone-button__link'
  phoneLink.href = 'tel: 84957755505'
  phoneLink.innerHTML = '&#9743'
  phoneButton.append(phoneLink)

  return phoneButton
}
