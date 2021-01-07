let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let notaA = parseFloat(values.shift());
let notaB = parseFloat(values.shift());
let notaC = parseFloat(values.shift());

let media = ((notaA * 2.0) + (notaB * 3.0) + (notaC * 5.0)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);