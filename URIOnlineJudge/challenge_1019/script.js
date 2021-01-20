let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let tempoEmSegundos = parseInt(value.shift());

let hora = 60;
let minutos = 60;
let segundos = 60;

let segundosPorHora = hora * minutos;

let totalHoras = Math.round(tempoEmSegundos / segundosPorHora);
let totalMinutos = Math.round(tempoEmSegundos % segundosPorHora / minutos);
let totalSegundos = Math.round(tempoEmSegundos % segundosPorHora % segundos);

console.log(`${totalHoras}:${totalMinutos}:${totalSegundos}`);