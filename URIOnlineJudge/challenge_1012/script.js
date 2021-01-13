let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let line = values.shift().split(' ');

let valorA = parseFloat(line.shift());
let valorB = parseFloat(line.shift());
let valorC = parseFloat(line.shift());

const PI = 3.14159;

let triangulo = (valorA * valorC) / 2;
let circulo = PI * (Math.pow(valorC, 2));
let trapezio = ((valorA + valorB) * valorC) / 2;
let quadrado = valorB * valorB;
let retangulo = valorA * valorB;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);