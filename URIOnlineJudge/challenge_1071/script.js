const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valorA = parseInt(values.shift());
const valorB = parseInt(values.shift());

let soma;

if (valorA % 2 != 0 && valorB % 2 != 0) {
  soma = Math.abs(valorA + valorB);
  console.log(soma);
} else {
  soma = Math.abs(valorB);
  console.log(soma);
}