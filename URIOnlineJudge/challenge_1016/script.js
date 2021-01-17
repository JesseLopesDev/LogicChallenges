let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let distanciaEmKm = parseInt(value.shift());

let tempo = 60;
let distanciaCarroY = 30;

let tempoNecessario = (tempo * distanciaEmKm) / distanciaCarroY;

console.log(`${tempoNecessario} minutos`);