let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let [eixoX1, eixoY1] = values[0].split(' ');
let [eixoX2, eixoY2] = values[1].split(' ');

let distancia = Math.sqrt(Math.pow((eixoX2 - eixoX1), 2) + Math.pow((eixoY2 - eixoY1), 2));

console.log(`${distancia.toFixed(4)}`);