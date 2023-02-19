import { createModalBackground } from '../components/index.js'

function handlerCloseModal (event) {
  event.target.closest('.modal-background').remove()
  document.body.style.overflowY = ''
}

export function handlerModal (modal) {
  const modalBackground = createModalBackground()
  modalBackground.append(modal)
  document.body.style.overflowY = 'hidden'
  document.body.append(modalBackground)

  const closeModal = document.querySelectorAll('.close-modal')
  closeModal.forEach((item) => item.addEventListener('click', (event) => handlerCloseModal(event)))
}
