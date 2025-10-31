document.addEventListener('DOMContentLoaded', function () {
    const loginForm = this.documentElementById('loginForm');
    const emailInput = documentElementById('email');
    const passwordInput = documentElementById('password');

// Validação do formulário
loginForm.addEventListener('submit', function (event) {
event.preventDefault();

// Validação básica
if (validateForm()) {
// Simulação de login bem-sucedido
alert('Login realizado com sucesso!');
// Aqui você normalmente faria uma requisição para o servidor
// loginForm.submit();
}
});

// Validação em tempo real
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

function validateForm() {
const isEmailValid = validateEmail();
const isPasswordValid = validatePassword();
return isEmailValid && isPasswordValid;
}


function validateEmail() {
const email = emailInput.value.trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === '') {
showError(emailInput, 'E-mail é obrigatório');
return false;
} else if (!emailRegex.test(email)) {
showError(emailInput, 'E-mail inválido');
return false;
} else {
showSuccess(emailInput);
return true;
}
}