let input = require('fs').readFileSync('./stdin', 'utf8');
let [valorA, valorB, valorC] = input.split(' ').map(item => parseInt(item));

let maiorEntreAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;

let maiorEntreXC = (maiorEntreAB + valorC + Math.abs(maiorEntreAB - valorC)) / 2;

console.log(`${maiorEntreXC} eh o maior`);