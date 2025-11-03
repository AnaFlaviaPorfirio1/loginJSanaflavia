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

// ... (Continuação do código da primeira parte)

    function validatePassword() {
        const password = passwordInput.value.trim();

        if (password === "") {
            showError(passwordInput, 'Senha é obrigatória');
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Senha deve ter pelo menos 6 caracteres');
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }

    // Funções de manipulação de erro e sucesso no DOM

    function showError(input, message) {
        const inputGroup = input.parentElement;

        // Remove classes de sucesso se existirem
        input.classList.remove('success');

        // Adiciona classes de erro
        input.classList.add('error');

        // Remove mensagens de erro anteriores
        const existingError = inputGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Adiciona mensagem de erro
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        inputGroup.appendChild(errorElement);
    }

    function showSuccess(input) {
        const inputGroup = input.parentElement;

        // Remove classes de erro se existirem
        input.classList.remove('error');

        // Adiciona classes de sucesso
        input.classList.add('success');

        // Remove mensagens de erro
        const existingError = inputGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        // Se houver uma mensagem de sucesso para adicionar, você adicionaria aqui, mas o código atual apenas remove o erro.
    }
});