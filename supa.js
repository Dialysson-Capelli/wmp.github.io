// script.js

// Configuração do Supabase (substitua pelas suas credenciais)
const SUPABASE_URL = 'https://gplnubnalvkadoqjyeqk.supabase.co'; // Substitua pela URL do seu Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbG51Ym5hbHZrYWRvcWp5ZXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzE3NjYsImV4cCI6MjA1NzIwNzc2Nn0.EYKppK_ixijjBiTwRTU4QbZzNTgjvKR6FvsPo0s8Gzc'; // Substitua pela chave de API pública

// Criação do cliente do Supabase (deve ocorrer após a biblioteca ser carregada)
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para carregar os produtos da tabela 'produtos' no Supabase
async function carregarProdutos() {
    try {
        // Fazendo a consulta na tabela 'produtos'
        const { data, error } = await supabase
            .from('produtos')  // Nome da tabela
            .select('*');  // Selecionando todos os campos

        // Verificando se ocorreu algum erro
        if (error) {
            throw error;
        }

        // Preenchendo a tabela no HTML
        const produtosTableBody = document.getElementById('produtosTable').getElementsByTagName('tbody')[0];

        // Limpando o conteúdo da tabela antes de adicionar novos dados
        produtosTableBody.innerHTML = '';

        // Adicionando os produtos na tabela HTML
        data.forEach(produto => {
            const row = produtosTableBody.insertRow();

            // Adicionando as células da linha com os dados do produto
            row.insertCell(0).textContent = produto.id;
            row.insertCell(1).textContent = produto.nome;
            row.insertCell(2).textContent = `R$ ${produto.preco.toFixed(2)}`;
            row.insertCell(3).textContent = produto.descricao;
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

// Carregar os produtos assim que a página for carregada
window.onload = carregarProdutos;
