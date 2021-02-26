const mainContainer = document.querySelector('.main-container'),
      login = document.querySelector('.login'),
      toLogin = document.querySelector('.toLogin'),
      register = document.querySelector('.register'),
      toRegister = document.querySelector('.toRegister'),
      logged = document.querySelector('.logged'),
      pageLogged = document.querySelector('#pageLogged')
      time = 1000;

function changeStyleToReg() {
    login.style.display = 'none'
    register.style.display = 'block';
    mainContainer.style.background = "#a06cd4"
    mainContainer.style.transition = "1s"
}

function changeStyleToLog() {
    login.style.display = 'block'
    register.style.display = 'none';
    mainContainer.style.background = "#ffffff"
    mainContainer.style.transition = "1s"
}

function switchToRegister() {
    setTimeout(() => changeStyleToReg(), time)
}

function switchToLogin() {
    setTimeout(() => changeStyleToLog(), time)
}

function changeToLogged() {
    mainContainer.style.display = 'none'
    pageLogged.style.width = '100vw'
    pageLogged.style.height = '100vh'
    pageLogged.style.opacity = '1'
    pageLogged.style.display = 'flex'
}

function verifyInputs() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if(!email.includes('@') || password === '') {
        return alert('Preencha todos os campos corretamente!')
    }

    return changeToLogged()
}

logged.addEventListener('click', e => {
    e.preventDefault()
    verifyInputs()
})

toRegister.addEventListener('click', switchToRegister)
toLogin.addEventListener('click', switchToLogin)