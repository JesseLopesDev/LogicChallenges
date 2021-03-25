const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n');

const valor = parseInt(value.shift());

let index = 1;

while (index <= 10000) {

  if (index % valor == 2) {
    console.log(index);
  }

  index += 1;
}