import { createModalBackground } from '../components/index.js'

function handlerCloseModal () {
  const modal = document.querySelector('.modal-background')
  modal.remove()
  document.body.style.overflowY = ''
}

export function handlerModal (modal) {
  const modalBackground = createModalBackground()
  modalBackground.append(modal)
  document.body.style.overflowY = 'hidden'
  document.body.append(modalBackground)

  const closeModal = document.querySelector('.close-modal')
  closeModal.addEventListener('click', handlerCloseModal)
}
