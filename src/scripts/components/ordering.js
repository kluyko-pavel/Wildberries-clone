export function createOrderingModal () {
  const modalOverlayOrder = document.createElement('div')
  modalOverlayOrder.className = 'modal-overlay-order'
  document.querySelector('.container').append(modalOverlayOrder)

  const modalOrder = document.createElement('div')
  modalOrder.className = 'modal-order'
  modalOverlayOrder.append(modalOrder)

  const SignInNumber = document.createElement('div')
  SignInNumber.className = 'modal__box'
  modalOrder.append(SignInNumber)

  const orderText = document.createElement('h2')
  orderText.className = 'modal__order-text'
  orderText.innerText = 'Оформление заказа'
  modalOrder.append(orderText)

  const orderInfo = document.createElement('h5')
  orderInfo.className = 'modal__order-info'
  orderInfo.innerText = 'Контактный телефон'
  modalOrder.append(orderInfo)

  const orderForm = document.createElement('form')
  orderForm.className = 'modal__order-form'
  modalOrder.append(orderForm)

  const modalNumb = document.createElement('input')
  modalNumb.className = 'modal__input-number'
  modalNumb.placeholder = 'Номер телефона'
  modalNumb.name = 'tel'
  modalNumb.type = 'tel'
  modalNumb.pattern = '#'
  modalOrder.append(modalNumb)

  const btnAccept = document.createElement('button')
  btnAccept.className = 'modal__btn-accept'
  btnAccept.innerText = 'Оформить заказ'
  btnAccept.type = 'button'
  modalOrder.append(btnAccept)

  const modalTerms = document.createElement('p')
  modalTerms.className = 'modal__terms'
  modalOrder.append(modalTerms)

  const termsText = document.createElement('span')
  termsText.className = 'modal__terms-text'
  termsText.innerHTML = 'Согласен с условиями Правил пользования <br> торговой площадкой и правилами возврата'
  modalTerms.append(termsText)
}
