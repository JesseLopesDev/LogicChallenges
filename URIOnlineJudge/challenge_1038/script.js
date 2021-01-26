let input = require('fs').readFileSync('./stdin', 'utf8');

let [codigo, quantidade] = input.split(' ')
  .map(item => parseInt(item));

let produto1 = {
  id: 1,
  especificacao: 'Cachorro Quente',
  preco: 4.00
};

let produto2 = {
  id: 2,
  especificacao: 'X-Salada',
  preco: 4.50
};

let produto3 = {
  id: 3,
  especificacao: 'X-Bacon',
  preco: 5.00
};

let produto4 = {
  id: 4,
  especificacao: 'Torrada Simples',
  preco: 2.00
};

let produto5 = {
  id: 5,
  especificacao: 'Refrigerante',
  preco: 1.50
};

let valorAPagar;

switch(codigo) {
  case 1:
    valorAPagar = quantidade * produto1.preco;
    break;
  case 2:
    valorAPagar = quantidade * produto2.preco;
    break;
  case 3:
    valorAPagar = quantidade * produto3.preco;
    break;
  case 4:
    valorAPagar = quantidade * produto4.preco;
    break;
  default:
    valorAPagar = quantidade * produto5.preco;
}

console.log(`Total: R$ ${valorAPagar.toFixed(2)}`);