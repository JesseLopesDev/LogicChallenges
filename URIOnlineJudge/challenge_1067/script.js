let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let valor = parseInt(value.shift());

let index = 1;

while (index <= valor) {

  if (valor % 2 == 0) {
    console.log(index);
    index += 2;
  }
}