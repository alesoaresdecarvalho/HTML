let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = '30%'
email.style.width = '30%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    let emailInput = document.querySelector('#email');

    if (emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail Válido';
        txtEmail.style.color = 'green';
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'black'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}
function enviar() {
    if (nomeOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha p formulário corretamente antes de enviar...')
    }


}