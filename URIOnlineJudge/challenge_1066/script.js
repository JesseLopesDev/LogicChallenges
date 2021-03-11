const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [5];

let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (let index = 0; index <= 5; index++) {
  valores[index] = parseInt(values.shift());

  if (valores[index] % 2 == 0) {
    valoresPares += 1;
  } else {
    if (Number.isNaN(valores[index])) {
      valoresImpares -= 1;
    }

    valoresImpares += 1;
  }

  if (valores[index] > 0) {
    valoresPositivos += 1;
  } else if (valores[index] < 0) {
    valoresNegativos += 1;
  }
}

console.log(`${valoresPares} valor(es) par(es)`);
console.log(`${valoresImpares} valor(es) impar(es)`);
console.log(`${valoresPositivos} valor(es) positivo(s)`);
console.log(`${valoresNegativos} valor(es) negativo(s)`);