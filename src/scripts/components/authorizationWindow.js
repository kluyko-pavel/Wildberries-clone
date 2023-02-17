// export function createAuthorizationWindow() {
//     const modalOverlay = document.createElement('div')
//     modalOverlay.className = 'modal-overlay'
//     document.querySelector('.container').append(modalOverlay)


//     const modal = document.createElement('div')
//     modal.className = 'modal'
//     modalOverlay.append(modal)

//     const modalSignIn = document.createElement('div')
//     modalSignIn.className = 'modal__sign-in'
//     modal.append(modalSignIn)

//     const modalTitle = document.createElement('h2')
//     modalTitle.className = 'modal__title-text'
//     modalTitle.innerHTML = `Войти или создать <br> профиль`
//     modalSignIn.append(modalTitle)

//     // const btnClose = document.createElement('button')
//     // btnClose.className = 'close-modal'
//     // btnClose.type = 'button'
//     // modalSignIn.append(btnClose)

//     // const btnCross = document.createElement('span')
//     // btnCross.className = 'close-modal-cross'
//     // btnClose.append(btnCross)

//     const formSignIn = document.createElement('form')
//     formSignIn.className = 'modul__form-sign-in'
//     formSignIn.action = "#"
//     modalSignIn.append(formSignIn)

//     const loginSignIn = document.createElement('input')
//     loginSignIn.className = 'modal__input-sign-in'
//     loginSignIn.placeholder = 'Логин'
//     loginSignIn.type = 'text'
//     loginLogIn.type = 'email'
//     formSignIn.append(loginSignIn)

//     const passwordSignIn = document.createElement('input')
//     passwordSignIn.className = 'modal__input-sign-in'
//     passwordSignIn.placeholder = 'Пароль'
//     passwordSignIn.type = 'text'
//     passwordSignIn.type = 'password'
//     formSignIn.append(passwordSignIn)

//     const btnAuth = document.createElement('button')
//     btnAuth.className = 'modal__btn-auth'
//     btnAuth.innerText = 'Войти'
//     btnAuth.type = 'button'
//     modalSignIn.append(btnAuth)


//     const modalLine = document.createElement('div')
//     modalLine.className = 'line'
//     modal.append(modalLine)



//     const modalLogIn = document.createElement('div')
//     modalLogIn.className = 'modal-down__log-in'
//     modal.append(modalLogIn)

//     const formLogIn = document.createElement('form')
//     formLogIn.className = 'modal-down__form-log-in'
//     formLogIn.action = '#'
//     modalLogIn.append(formLogIn)

//     const loginLogIn = document.createElement('input')
//     loginLogIn.className = 'modal-down__input-log-in'
//     loginLogIn.placeholder = 'Логин'
//     loginLogIn.type = 'text'
//     loginLogIn.type = 'email'
//     formLogIn.append(loginLogIn)

//     const passwordLogIn = document.createElement('input')
//     passwordLogIn.className = 'modal-down__input-log-in'
//     passwordLogIn.placeholder = 'Пароль'
//     passwordLogIn.type = 'text'
//     passwordLogIn.type = 'password'
//     formLogIn.append(passwordLogIn)

//     const againPassword = document.createElement('input')
//     againPassword.className = 'modal-down__input-log-in'
//     againPassword.placeholder = 'Повторите пароль'
//     againPassword.type = 'text'
//     againPassword.type = 'password'
//     formLogIn.append(againPassword)

//     const btnLogIn = document.createElement('button')
//     btnLogIn.className = 'modal-down__btn-log-in'
//     btnLogIn.innerText = 'Создать профиль'
//     btnLogIn.type = 'button'
//     modalLogIn.append(btnLogIn)

// }