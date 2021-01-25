let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let valor = parseFloat(value.shift());

if (valor <= 25) {
  console.log('Intervalo [0,25]');
} else if (valor <= 50) {
  console.log('Intervalo (25,50]');
} else if (valor <= 75) {
  console.log('Intervalo (50,75]');
} else if (valor <= 100) {
  console.log('Intervalo (75,100]');
} else {
  console.log('Fora de intervalo');
}