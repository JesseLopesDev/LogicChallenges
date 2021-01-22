let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let valor = parseFloat(value.shift());

let notas = [100, 50, 20, 10, 5, 2];

console.log('NOTAS:');

for (let nota of notas) {
  let index = parseInt(valor / nota);
  console.log(`${index} nota(s) de R$ ${nota.toFixed(2)}`);

  valor = valor % nota;
}

let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('MOEDAS:');

for (let moeda of moedas) {
  let index = parseInt(valor / moeda);
  console.log(`${index} moeda(s) de R$ ${moeda.toFixed(2)}`);

  valor = valor % moeda;
}