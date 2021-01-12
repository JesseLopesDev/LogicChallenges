let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let raio = parseInt(value.shift());

const PI = 3.14159;

let volume = (4 / 3) * PI * (Math.pow(raio, 3));

console.log(`VOLUME = ${volume.toFixed(3)}`);