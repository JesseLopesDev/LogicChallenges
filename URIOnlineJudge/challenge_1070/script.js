const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n');

let valor = parseInt(value.shift());

const numeroLimite = 19;

while (valor <= numeroLimite) {

  if (valor == 8) {
    valor += 1;
  }

  if (valor % 2 != 0) {

    console.log(valor);
    valor += 2;
  }
}