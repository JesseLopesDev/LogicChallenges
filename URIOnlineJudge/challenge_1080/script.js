const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [100];

let maiorValor = 0;
let index = 1;

for (let i = 1; i <= 100; i++) {
  valores[i] = parseInt(values.shift());

  if (i == 1) {
    maiorValor = valores[i];
    index = 1;
  } else if (valores[i] > maiorValor) {
    maiorValor = valores[i];
    index = i;
  }
}

console.log(`${maiorValor}`);
console.log(`${index}`);