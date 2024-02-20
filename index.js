// Importação do readline para entrada de dados via teclado
const input = require('readline-sync');


// To DO: Declare uma lista com nome 'produtos'



let option; // Variável utilizada para armazenar a opção escolhida pelo usuário (utilize o readline-sync dentro do loop)
let id = 1; // id utilizado no cadastro de produtos



// --- Esta função exibirá o MENU ---
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


// --- Funções do CRUD ---

// To DO: Implemente a função cadastrarProduto(id, nome, categoria, preco) com a sintaxe REGULAR



// To DO: Implemente a função listarProdutos() com a sintaxe REGULAR



// To DO: Implemente a função buscarProdutoPorId(id) com a sintaxe REGULAR



// To DO: Altere a função abaixo para sintaxe de Arrow Function
function atualizarProdutoPorId(id) {
    // 1. Verifica se o produto existe
    const productFound = buscarProdutoPorId(id);

    /* 2. Se localizado, percorre o array para pegar o produto com o id informado, permitindo alterar seus dados
    */
    if (productFound) {
        produtos.map((produto, index) => {
            
            // Pega o elemento com base no ID passado, permitindo a alteração do produto certo
            if (produto.id === id) {

                produtos[index].nome = input.question("Informe o novo nome do produto: ");
                produtos[index].categoria = input.question("Informe a nova categoria do produto: ");
                produtos[index].preco = input.questionFloat("Informe o novo preco do produto: ");

            };

        });
    };

    // Se localizado, vai exibir as info. atualizadas, senão a mensagem configurada em buscarProdutoPorId(id).
    return productFound;
};


/*
 To DO: Implemente a função excluirProduto() na sintaxe de Arrow Function. Utilize o método .splice(index, 1) para remoção do produto e retorne o produto removido
*/




// MENU
do {

    let productId; // Variável para pegar o ID do Produto.

    // To DO: Chame a função para exibir o Menu


    // To DO: Peça para o usuário informar uma opção - utilize os métodos do readline
    option = ;


    // Caso o usuário digite 0, sai do loop e encerra o programa
    if (option === 0)
        break;


    // To DO: Informe abaixo o que será verificado no Switch    
    switch () {
        case 1:
            console.clear();
            console.log("-- Cadastrar produto --");

            // To DO: Peça para o usuário inserir as informações do produto a ser cadastrado
            let nome = ;
            let categoria = ;
            let preco = ;


            // To DO: Chame a função para cadastro de Produto e exiba seu retorno           


            id++; // Realiza incremento no id
            break;

        case 2:
            console.clear();
            console.log("-- Produtos cadastrados --");

            // To DO: Chame a função para listagem de produtos - verifique se a lista está sendo impressa


            break;

        case 3:
            console.clear();
            console.log("-- Buscar Produto por ID --");


            // To DO: Peça para o usuário informar o ID do produto que deseja buscar
            productId = ;


            // To DO: Chame a função de buscar produto e exiba o seu retorno


            break;

        case 4:
            console.clear();
            console.log("-- Atualizar produto -- ");

            // To DO: Peça para o usuário informar o ID do produto.
            productId = ;

            // To Do: Chame a função de atualizar produto passando o ID informado pelo usuário como parâmetro - imprima o resultado


            break;

        case 5:
            console.clear();

            // TO DO: Insira este código na função de remover produto
            console.log("-- Excluir produto -- ");

            // To DO: Peça para o usuário informar o ID do produto.
            productId = ;

            // To Do: Chame a função de excluir produto passando o ID informado como parâmetro - imprima o resultado

            break;

        default:
            console.clear();
            console.log("Opção inválida! Informe um número válido.")
            break;
    };


} while (true);


console.log("Programa finalizado!");