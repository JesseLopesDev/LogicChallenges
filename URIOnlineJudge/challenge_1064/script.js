const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [6];

let valoresPositivos = 0;
let soma = 0;

for (let index = 0; index <= 6; index++) {
  valores[index] = parseFloat(values.shift());

  if(valores[index] > 0) {
    soma = soma + valores[index];

    valoresPositivos++;
  }
}

let media = soma / valoresPositivos;

console.log(`${valoresPositivos} valores positivos`);
console.log(`${media}`);