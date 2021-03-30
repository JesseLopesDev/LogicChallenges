const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valor = parseInt(values.shift());

let [notaA, notaB, notaC] = values.shift().split(' ');
let [notaD, notaE, notaF] = values.shift().split(' ');
let [notaG, notaH, notaI] = values.shift().split(' ');

const mediaCaso1 = ((notaA * 2.0) + (notaB * 3.0) + (notaC * 5.0)) / 10.0;
const mediaCaso2 = ((notaD * 2.0) + (notaE * 3.0) + (notaF * 5.0)) / 10.0;
const mediaCaso3 = ((notaG * 2.0) + (notaH * 3.0) + (notaI * 5.0)) / 10.0;

console.log(`${mediaCaso1.toFixed(1)}`);
console.log(`${mediaCaso2.toFixed(1)}`);
console.log(`${mediaCaso3.toFixed(1)}`);