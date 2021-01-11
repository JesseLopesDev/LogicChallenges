let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let informacoesItem1 = values.shift().split(' ');
let InformacoesItem2 = values.shift().split(' ');

let idPeca1 = informacoesItem1.shift();
let quantidadePeca1 = informacoesItem1.shift();
let valorUnitarioPeca1 = informacoesItem1.shift();

let idPeca2 = InformacoesItem2.shift();
let quantidadePeca2 = InformacoesItem2.shift();
let valorUnitarioPeca2 = InformacoesItem2.shift();

let valorAPagar = ((quantidadePeca1 * valorUnitarioPeca1) + (quantidadePeca2 * valorUnitarioPeca2));

console.log(`VALOR A PAGAR: R$ ${valorAPagar.toFixed(2)}`);