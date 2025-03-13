// Função para validar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();  // Impede o envio do formulário

        // Captura os valores dos campos de usuário e senha
	var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Simulação de uma validação de login
	if (username === "admin" && password === "123") {
        // Redireciona para a página home.html após login bem-sucedido
        window.location.href = "index.html";
        } else {
        // Se as credenciais forem inválidas, exibe uma mensagem de erro
        alert("Usuário ou senha inválidos!");
        }
});