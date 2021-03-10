const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [5];

let valoresPares = 0;

for (let index = 0; index <= 5; index++) {
  valores[index] = parseInt(values.shift());

  if (valores[index] % 2 == 0) {
    valoresPares += 1;
  }
}

console.log(`${valoresPares} valores pares`);