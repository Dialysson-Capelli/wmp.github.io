// script.js

// Configuração do Supabase
const SUPABASE_URL = 'https://gplnubnalvkadoqjyeqk.supabase.co'; // Substitua com sua URL do Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbG51Ym5hbHZrYWRvcWp5ZXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzE3NjYsImV4cCI6MjA1NzIwNzc2Nn0.EYKppK_ixijjBiTwRTU4QbZzNTgjvKR6FvsPo0s8Gzc'; // Substitua com sua chave de API pública

// Criando a instância do cliente Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para buscar os produtos do Supabase
async function carregarProdutos() {
    try {
        // Fazendo a consulta na tabela 'produtos'
        const { data, error } = await supabase
            .from('PRODUTOS') // Nome da tabela
            .select('*'); // Selecionando todos os dados

        // Verificando se houve algum erro
        if (error) {
            throw error;
        }

        // Se a consulta for bem-sucedida, preenchendo a tabela no HTML
        const produtosTableBody = document.getElementById('produtosTable').getElementsByTagName('tbody')[0];

        // Limpando o conteúdo da tabela antes de adicionar novos dados
        produtosTableBody.innerHTML = '';

        // Adicionando cada produto na tabela
        data.forEach(produto => {
            const row = produtosTableBody.insertRow();

            // Adicionando células à linha com os dados do produto
            row.insertCell(0).textContent = produto.id;
            row.insertCell(1).textContent = produto.nome;
            row.insertCell(2).textContent = `R$ ${produto.preco.toFixed(2)}`;
            row.insertCell(3).textContent = produto.descricao;
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

// Carregar os produtos ao carregar a página
window.onload = carregarProdutos;
