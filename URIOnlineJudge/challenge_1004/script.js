let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let valorA = parseInt(values.shift());
let valorB = parseInt(values.shift());

let produto = valorA * valorB;

console.log(`PROD = ${produto}`);