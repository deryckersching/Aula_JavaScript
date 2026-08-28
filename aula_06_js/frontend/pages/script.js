// EXERCÍCIOS - DERYCK ERSCHING ZEZUINO

// QUESTÃO 1. Selecione o <h1> usando querySelector e 
// mostre o elemento inteiro no console, para confirmar 
// que pegou o elemento certo.

const titulo = document.querySelector("h1");
console.log(titulo);

// QUESTÃO 2. Selecione o parágrafo de classe subtitulo e mostre 
// no console só o texto dele (não o elemento inteiro).

const subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo.textContent);

//  QUESTÃO 3. Use querySelectorAll para selecionar todos os elementos 
// com classe produto e mostre no console quantos foram encontrados.

const produtos = document.querySelectorAll(".produto");
console.log(produtos.length);

// QUESTÃO 4. Selecione apenas o primeiro elemento de classe preco
// da página (dica: dentro de uma lista de querySelectorAll, como pegar 
// só um item específico?) e mostre o texto dele no console.

const preco = document.querySelector(".preco");
console.log(preco);

// QUESTÃO 5. Selecione o produto pelo id (#produto-2) e mostre 
// o elemento inteiro no console. Compare no console: o que aparece 
// dentro dele além do texto?

const produto2 = document.querySelector("#produto-2");
console.log(produto2);

// QUESTÃO 6. Selecione o <h2> do #produto-1 (o que tem <strong> dentro) 
// e mostre no console, separadamente, o resultado de textContent, 
// innerText e innerHTML desse elemento. Anote a diferença que você 
// observou entre os três.

const produto1 = document.querySelector("h2");
console.log(produto1);

// QUESTÃO 7. Troque o texto do <h1> para "Loja da Turma — Promoção!" 
// usando textContent.

console.log("titulo.textContent: " + titulo.textContent);
titulo.textContent = "Loja da Turma - Promoção!";

// QUESTÃO 8. Troque o texto do #rodape para "Todos os 
// direitos reservados © 2026".

console.log("rodape.textContent: " + rodape.textContent);
rodape.textContent = "Todos os direitos reservados © 2026";

// QUESTÃO 9. Selecione a <p class="descricao"> do #produto-3 e altere 
// o texto para "Perfeita para o inverno.".

const descricao = document.querySelector("#produto-3 .descricao");
console.log("descricao.textContent: " + descricao.textContent);
descricao.textContent = "Perfeita para o inverno.";

// QUESTÃO 10. Use innerHTML para alterar o <h2> do #produto-2, 
// deixando a palavra "Dev" em negrito, assim: 
// Camiseta <strong>Dev</strong> — Edição Limitada. 
// Depois, tente fazer a mesma alteração usando textContent 
// no lugar de innerHTML e observe (e explique) o que muda no resultado.

const tituloProduto2 = document.querySelector("#produto-2 h2");
console.log("Antes:", tituloProduto2.innerHTML);
tituloProduto2.innerHTML = "Camiseta <strong>Dev</strong> — Edição Limitada";
console.log("Depois:", tituloProduto2.innerHTML);

// QUESTÃO 11. Selecione o <span id="contador-carrinho"> e altere 
// seu texto para "3".

const contador =  document.querySelector("#contador-carrinho");
console.log("Antes:", contador.textContent);
contador.textContent = "3";
console.log("Depois:", contador.textContent);

// QUESTÃO 12. Selecione o <ul id="lista-avisos"> inteiro e, 
// usando innerHTML, substitua todo o conteúdo por uma nova lista 
// de 2 avisos diferentes dos originais.

const lista = document.querySelector("#lista-avisos");
lista.innerHTML = `
  <li>Frete grátis acima de R$ 60</li>
  <li>Entrega em até 3 dias úteis</li>
`;
console.log(lista);

// QUESTÃO 13. Desafio: troque o texto de um elemento dentro de cada 
// um dos três produtos (#produto-1, #produto-2, #produto-3), usando 
// um seletor diferente em cada caso (por id, por class, e 
// por hierarquia — ex: #produto-3 .preco).

const elemento1 = document.querySelector("#produto-1 .produto-1");
console.log("elemento1.textContent: " + elemento1.textContent);
elemento1.textContent = "preco R$ 51,90";