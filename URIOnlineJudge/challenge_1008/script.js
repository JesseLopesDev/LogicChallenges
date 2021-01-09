let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let numeroFuncionario = parseInt(values.shift());
let horasTrabalhadas = parseInt(values.shift());
let valorPorHoraTrabalhada = parseFloat(values.shift());

let salario = valorPorHoraTrabalhada * horasTrabalhadas;

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);