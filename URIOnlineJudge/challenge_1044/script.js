let input = require('fs').readFileSync('./stdin', 'utf8');

let [valorA, valorB] = input.split(' ')
  .map(item => parseInt(item));

if (valorA % valorB == 0) {
  console.log('Sao Multiplos');
} else if (valorB % valorA == 0) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}