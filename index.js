// Importação do readline para entrada de dados via teclado
const input = require('readline-sync');

// Importação das funções - arquivo features
const { exibirMenu,
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProdutoPorId,
    excluirProdutoPorId } = require('./src/features');


let option; // Variável utilizada para armazenar a opção escolhida pelo usuário
let id = 1; // id utilizado no cadastro de produtos


// MENU: Aqui é a parte onde o usuário interage para realizar as funcionalidades do CRUD -> Criar, ler, atualizar e excluir produtos
do {
    let productId; // Variável para pegar o ID do Produto.

    // Chama a função do Menu que exibirá as opções disponíveis
    exibirMenu();

    option = input.questionInt("Informe a opcao que deseja: ");

    // Caso o usuário digite 0 => Sai do loop e encerra o programa
    if (option === 0)
        break;

    switch (option) {
        case 1:
            console.clear(); // Limpa o console
            console.log("-- Cadastrar produto --"); // Exibe a opção selecionada

            // Entrada de dados: Necessário para realizar o cadastro de novos produtos
            let nome = input.question("Informe o nome do produto: ");
            let categoria = input.question("Informe a categoria produto: ");
            let preco = input.questionFloat("Informe o preco do produto: ");

            // Cadastra o produto e retorna as informações dele
            console.log("Produto cadastrado: ", cadastrarProduto(id, nome, categoria, preco));

            id++; // Incrementa 1 no ID
            break;

        case 2:
            console.clear();
            console.log("-- Produtos cadastrados --");

            console.log(listarProdutos()); // Exibe lista com TODOS os produtos cadastrados
            break;

        case 3:
            console.clear();
            console.log("-- Buscar Produto por ID --");

            productId = input.questionInt("Informe o id do produto: ");

            console.log("Informações do produto:", buscarProdutoPorId(productId));
            break;

        case 4:
            console.clear();
            console.log("-- Atualizar produto -- ");

            productId = input.questionInt("Informe o ID do produto: ");

            console.log("Produto atualizado: ", atualizarProdutoPorId(productId));
            break;

        case 5:
            console.clear();
            console.log("-- Excluir produto -- ");

            productId = input.questionInt("Informe o ID do produto: ");

            console.log("Produto excluído: ", excluirProdutoPorId(productId));
            break;

        default:
            console.clear();
            console.log("Opção inválida! Informe um número válido.");
            break;
    };


} while (true);

console.log("Programa finalizado!");