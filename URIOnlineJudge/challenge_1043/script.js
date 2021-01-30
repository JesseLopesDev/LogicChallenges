let input = require('fs').readFileSync('./stdin', 'utf8');

let [valorA, valorB, valorC] = input.split(' ')
  .map(item => parseFloat(item));

if (Math.abs(valorA - valorB) < valorC && valorC < Math.abs(valorA + valorB)) {
  console.log(`Perimetro = ${valorA + valorB + valorC}`);
} else if (Math.abs(valorC - valorB) < valorA && valorA < Math.abs(valorC + valorB)) {
  console.log(`Perimetro = ${valorA + valorB + valorC}`);
} else if (Math.abs(valorA - valorC) < valorB && valorB < Math.abs(valorA + valorC)) {
  console.log(`Perimetro = ${valorA + valorB + valorC}`);
} else {
  console.log(`Area = ${((valorA + valorB) / 2) * valorC}`);
}