let input = require('fs').readFileSync('./stdin', 'utf8');

let [valorA, valorB, valorC] = input.split(' ')
  .map(item => parseFloat(item));

if (valorA > valorB && valorA > valorC) {
  valorA = valorA;
  valorB = valorB;
  valorC = valorC;
} else if (valorB > valorA && valorB > valorC) {
  valorA = valorB;
  valorB = valorC;
  valorC = valorA;
} else {
  valorA = valorC;
  valorC = valorB;
  valorB = valorA;
}

if (valorA >= valorB + valorC) {
  console.log('NAO FORMA TRIANGULO');
} else if (Math.pow(valorA, 2) == Math.pow(valorB, 2) + Math.pow(valorC, 2)) {
  console.log('TRIANGULO RETANGULO');
} else if (Math.pow(valorA, 2) > Math.pow(valorB, 2) + Math.pow(valorC,2)) {
  console.log('TRIANGULO OBTUSANGULO');
} else {
  console.log('TRIANGULO ACUTANGULO');
}

if (valorA == valorB && valorA == valorC) {
  console.log('TRIANGULO EQUILATERO');
} else {
  console.log('TRIANGULO ISOSCELES');
}