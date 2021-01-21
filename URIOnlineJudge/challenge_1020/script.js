let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let idadeEmDias = parseInt(value.shift());

let diasPorAno = 365;
let diasPorMes = 30;

let ano = Math.round(idadeEmDias / diasPorAno);
let mes = Math.round((idadeEmDias % diasPorAno) / diasPorMes);
let dia = Math.round((idadeEmDias % diasPorAno) % diasPorMes);

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(s)`);
console.log(`${dia} dia(s)`);