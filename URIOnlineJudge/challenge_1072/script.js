const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [4];

let index = 0;
let contador = 0;

while (index <= 4) {
  valores[index] = parseInt(values.shift());

  if (valores[index] >= 10 && valores[index] <= 20) {
    contador += 1;
  }

  if (valores[index] < 10 && valores[index] > 20) {
    contador += 1;
  }

  index++;
}

console.log(`${contador} em`);
console.log(`${contador} fora`);