// Importação do readline para entrada de dados via teclado
const input = require('readline-sync');

// Declaração da lista
let produtos = [];

 
let option; // Variável utilizada para armazenar a opção escolhida pelo usuário
let id = 1; // id utilizado no cadastro de produtos


// Esta função exibirá o MENU
function exibirMenu() {
    console.log("==========================");
    console.log("           CRUD           ");
    console.log("==========================");
    console.log("---------- Menu ----------");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto por ID");
    console.log("4 - Atualizar produto");
    console.log("5 - Excluir produto");
    console.log("0 - Sair");
    console.log("--------------------------");
};


// Funções do CRUD: São as responsáveis pela manipulação dos dados

function cadastrarProduto(id, nome, categoria, preco) {

    // Monta objeto com os dados a serem salvos do produto
    const productInfo = {
        id,
        nome,
        categoria,
        preco
    };

   produtos.push(productInfo); // Insere produto no array

   return productInfo; // Retorna as informações do produto cadastrado
};


function listarProdutos() {
    return produtos; // Retorna a lista com TODOS os produtos cadastrados
};


function buscarProdutoPorId(id) {
    // Verifica se um produto existe com base no ID informado e retorna true ou false
    const productFound = produtos.find(product => product.id === id);
    
    // Caso exista, exibe as informações do produto
    if(productFound)
        return productFound;
    
    // Caso não exista, retorna a mensagem abaixo
    return "Produto não encontrado!";
};


// Ao utilizar arrow function, quando houver APENAS UM parâmetro, os parênteses são opcionais.
const atualizarProdutoPorId = id => {
    const productFound = buscarProdutoPorId(id); // Antes de atualizar, verifica se o produto existe.
    
    // Se true, permite a sua atualização
    if(productFound) {
        produtos.map((product, index) => {
        
            // Pega o elemento com base no ID passado, permitindo a alteração do produto certo
            if(product.id === id) {
                
                produtos[index].nome = input.question("Informe o novo nome do produto: ");
                produtos[index].categoria = input.question("Informe a nova categoria do produto: ");
                produtos[index].preco = input.questionFloat("Informe o novo preco do produto: ");

            };
        });
    };
    
    // Se localizado, vai exibir as info. atualizadas, senão mensagem configurada em buscarProdutoPorId(id).
    return productFound;
};


const excluirProdutoPorId = (id) => {
    const productFound = buscarProdutoPorId(id);
    
    if(productFound) {
        produtos.map((produto, index) => {
            if(produto.id === id)
                produtos.splice(index, 1); // Remove o produto.
        });
    }

    // Se localizado, vai retornar as info. do produto excluído, senão mensagem configurada em buscarProdutoPorId(id).
    return productFound;
};



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
            console.log("-- Cadastrar produto --"); // Exibe o título a opção selecionada

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