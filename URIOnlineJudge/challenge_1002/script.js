let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let raio = parseFloat(value.shift());

const PI = 3.14159;

let area = PI * (Math.pow(raio, 2));

console.log(`A=${area.toFixed(4)}`);