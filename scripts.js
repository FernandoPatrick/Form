const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordconfirmation = document.getElementById("passwordconfirmation")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  checkForm()
})

email.addEventListener("blur", () => {
  checkInputEmail()
})
username.addEventListener("blur", () => {
  checkImputUserName()
})
password.addEventListener("blur", () => {
  checkInputPassword()
})
passwordconfirmation.addEventListener("blur", () => {
  checkInputPassworConfirmation()
})


function checkImputUserName() {
  const usernameValue = username.value

  if (usernameValue === "") {
    errorInput(username, "Preencha um username!")
  }else {
    const formItem = username.parentElement
    formItem.className = "form-content"
  }
}

function checkInputEmail() {
  const emailValue = email.value

  if(emailValue === "") {
    errorInput(email, "O email é obrigatório!")
  }else {
    const formItem = email.parentElement
    formItem.className = "form-content"
  }
}

function checkInputPassword() {
  const passwordValue = password.value

  if(passwordValue === "") {
    errorInput(password, "A senha é obrigatória")
  }else if(passwordValue.length < 8) {
    errorInput(password, "A senha deve ter no mínimo 8 caracteres!")
  }else {
    const formItem = password.parentElement
    formItem.className = "form-content"
  }
}

function checkInputPassworConfirmation() {
  const passwordValue = password.value
  const confirmPasswordValue = passwordconfirmation.value

  if(confirmPasswordValue === "") {
    errorInput(passwordconfirmation, "Confirme sua senha!")
  }else if(confirmPasswordValue !== passwordValue) {
    errorInput(passwordconfirmation, "As senhas náo são iguais!")
  }else {
    const formItem = passwordconfirmation.parentElement
    formItem.className = "form-content"
  }
}

function checkForm() {
  checkImputUserName()
  checkInputEmail()
  checkInputPassword()
  checkInputPassworConfirmation()
  
  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  })

  if(isValid) {
    alert("CADASTRADO COM SUCESSO!")
  }
}


function errorInput(input, message) {
  const formItem = input.parentElement
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message

  formItem.className = "form-content error"
}