let input = require('fs').readFileSync('./stdin', 'utf8');

let [eixoX, eixoY] = input.split(' ')
  .map(item => parseFloat(item));

if (eixoX == 0 && eixoY == 0) {
  console.log('Origem');
} else if (eixoX > 0 && eixoY == 0) {
  console.log('Eixo X');
} else if (eixoX == 0 && eixoY > 0) {
  console.log('Eixo Y');
} else if (eixoX > 0 && eixoY > 0) {
  console.log('Q1');
} else if (eixoX < 0 && eixoY > 0) {
  console.log('Q2');
} else if (eixoX < 0 && eixoY < 0) {
  console.log('Q3');
} else if (eixoX > 0 && eixoY < 0) {
  console.log('Q4');
}