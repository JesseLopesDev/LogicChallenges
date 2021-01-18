let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let tempoGastoNaViagem = parseInt(values.shift());
let velocidadeMedia = parseInt(values.shift());

let consumoMedio = 12;

let combustivelNecessario = (velocidadeMedia / consumoMedio) * tempoGastoNaViagem;

console.log(`${combustivelNecessario.toFixed(3)}`);