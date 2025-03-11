
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gplnubnalvkadoqjyeqk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Função para buscar dados da tabela 'produtos'
async function carregarProdutos() {
    try {
        // Fazendo a consulta na tabela 'produtos'
        const { data, error } = await supabase
            .from('produtos') // Substitua 'produtos' pelo nome da sua tabela
            .select('*'); // Seleciona todos os campos

        if (error) {
            throw error;
        }

        // Exibindo os dados no console
        console.log(data);

        // Inserindo os dados na tabela HTML
        const produtosTableBody = document.getElementById('produtosTable').getElementsByTagName('tbody')[0];
        produtosTableBody.innerHTML = '';  // Limpar a tabela antes de adicionar novos dados

        data.forEach(produto => {
            const row = produtosTableBody.insertRow();
            row.insertCell(0).textContent = produto.id;
            row.insertCell(1).textContent = produto.nome;
            row.insertCell(2).textContent = `R$ ${produto.preco.toFixed(2)}`;
            row.insertCell(3).textContent = produto.descricao;
        });
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
    }
}

// Carregar produtos assim que a página for carregada
window.onload = carregarProdutos;
