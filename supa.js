// // Adicionar o evento de submit no formulário
// Crie uma instância do Supabase usando a URL e a chave de API
const {createClient} = supabase;

const SUPABASE_URL = 'https://gplnubnalvkadoqjyeqk.supabase.co';  // Substitua pela URL do seu projeto
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbG51Ym5hbHZrYWRvcWp5ZXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzE3NjYsImV4cCI6MjA1NzIwNzc2Nn0.EYKppK_ixijjBiTwRTU4QbZzNTgjvKR6FvsPo0s8Gzc'; // Substitua pela chave de API

// Criando o cliente do Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para obter dados da tabela 'users' (substitua com sua tabela)
async function getUsers() {
    const {data, error} = await supabase
            .from('produtos') // Nome da tabela
            .select('*'); // Seleciona todos os dados

    if (error) {
        console.error('Erro ao buscar dados:', error);
    } else {
        console.log('Dados recuperados:', data);
    }
}

// Função para adicionar um novo usuário
async function addUser(username, email) {
    const {data, error} = await supabase
            .from('users')  // Nome da tabela
            .insert([
                {username: username, email: email}  // Os dados a serem inseridos
            ]);

    if (error) {
        console.error('Erro ao adicionar usuário:', error);
    } else {
        console.log('Usuário adicionado com sucesso:', data);
    }
}

// Testando as funções
getUsers(); // Chama para buscar todos os usuários
//addUser('novousuario', 'usuario@example.com'); // Adiciona um novo usuário
