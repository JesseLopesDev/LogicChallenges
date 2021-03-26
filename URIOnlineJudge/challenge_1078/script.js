const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n');

const valor = parseInt(value.shift());

for (let index = 1; index <= 10; index++) {
  console.log(`${index} x ${valor} = ${index * valor}`);
}