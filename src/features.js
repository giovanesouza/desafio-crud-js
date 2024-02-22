// Importação do readline para entrada de dados via teclado
const input = require('readline-sync');

// Importa a lista de produtos possibilitando a sua manipulação aqui
const produtos = require('./database');

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


// Funções do CRUD

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


// Exportando funções
module.exports =  {
    exibirMenu,
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProdutoPorId,
    excluirProdutoPorId
};