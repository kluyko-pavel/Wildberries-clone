export function createErrorOrderingModal () {
  const errorModalOrder = document.createElement('div')
  errorModalOrder.className = 'modal-order'

  const btnClose = document.createElement('button')
  btnClose.className = 'close-modal'
  btnClose.type = 'button'
  errorModalOrder.append(btnClose)

  const btnCross = document.createElement('span')
  btnCross.className = 'close-modal-cross'
  btnClose.append(btnCross)

  const orderTitle = document.createElement('h2')
  orderTitle.className = 'modal-order__title'
  orderTitle.innerText = 'В корзине пока пусто'
  errorModalOrder.append(orderTitle)

  const orderInfo = document.createElement('h5')
  orderInfo.className = 'modal-order__info'
  orderInfo.innerText = 'Загляните на главную, чтобы выбрать товары или найдите нужное в поиске'
  errorModalOrder.append(orderInfo)

  return errorModalOrder
}
