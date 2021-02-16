let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let valores = [6];

let valoresPositivos = 0;

for (let index = 0; index <= 6; index++) {

  valores[index] = parseFloat(values.shift());

  if(valores[index] > 0) {

    valoresPositivos++;
  }
}

console.log(`${valoresPositivos} valores positivos`);