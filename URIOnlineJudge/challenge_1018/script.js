let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let valor = parseInt(value.shift());

let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas) {
  let quantidadeNotas = parseInt(valor / nota);
  console.log(`${quantidadeNotas} nota(s) de R$ ${nota},00`);
  valor = valor % nota;
}