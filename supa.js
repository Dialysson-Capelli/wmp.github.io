<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Supabase</title>
</head>
<body>

    <h1>Dados da Tabela de Produtos</h1>

    <table id="produtosTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <!-- Os dados serão carregados aqui -->
        </tbody>
    </table>

    <!-- Carregar a biblioteca do Supabase -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
    <!-- Carregar o código JavaScript que irá fazer a consulta -->
    <script type="module" src="script.js"></script>

</body>
</html>
