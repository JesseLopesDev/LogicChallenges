let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let valorA = parseInt(values.shift());
let valorB = parseInt(values.shift());
let valorC = parseInt(values.shift());
let valorD = parseInt(values.shift());

let diferenca = ((valorA * valorB) - (valorC * valorD));

console.log(`DIFERENCA = ${diferenca}`);