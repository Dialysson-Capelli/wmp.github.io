// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário para realizar a validação

    // Obtendo os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtendo a referência do elemento onde a mensagem de erro será exibida
    const errorMessage = document.getElementById('error-message');

    // Limpar a mensagem de erro antes de cada validação
    errorMessage.textContent = '';

    // Verificar se os campos estão preenchidos
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return; // Retorna sem enviar o formulário
    }

    // Validação simples (você pode adicionar mais lógica para validar usuário e senha)
    if (username === 'admin' && password === '123456') {
        // Se o login for bem-sucedido, redireciona para o dashboard
        window.location.href = 'dashboard.html'; // Redireciona para a página dashboard.html
    } else {
        // Se os dados estiverem incorretos, exibe uma mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
}
