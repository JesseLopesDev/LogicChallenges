let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let vendedor = values.shift();
let salarioFixo = parseFloat(values.shift());
let vendasMensaisEmDinheiro = parseFloat(values.shift());

let comissao = 15 / 100;

let totalAReceber = salarioFixo + (vendasMensaisEmDinheiro * comissao);

console.log(`TOTAL = ${totalAReceber.toFixed(2)}`);