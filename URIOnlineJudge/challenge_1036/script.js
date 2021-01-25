let input = require('fs').readFileSync('./stdin', 'utf8');

let [valorA, valorB, valorC] = input.split(' ')
  .map(item => parseFloat(item));

let coeficiente1;
let coeficiente2;

let delta = Math.pow(valorB, 2) - (4 * valorA * valorC);

if (valorA !== 0 && delta > 0) {
  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
  console.log(`R1 = ${coeficiente1.toFixed(5)}`);

  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
  console.log(`R2 = ${coeficiente2.toFixed(5)}`);
} else {
  console.log('Impossivel calcular');
}