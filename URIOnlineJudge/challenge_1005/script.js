let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let notaA = parseFloat(values.shift());
let notaB = parseFloat(values.shift());

let media = ((notaA * 3.5) + (notaB * 7.5)) / 11.0;

console.log(`MEDIA = ${media.toFixed(5)}`);