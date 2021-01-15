let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let distanciaTotalPercorrida = parseInt(values.shift());
let combustivelGastoEmLitros = parseFloat(values.shift());

let consumoMedio = distanciaTotalPercorrida / combustivelGastoEmLitros;

console.log(`${consumoMedio.toFixed(3)} km/l`);