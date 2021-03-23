const input = require('fs').readFileSync('./stdin', 'utf8');
const value = input.split('\n');

const valor = parseInt(value.shift());

let numeroPar = 0;
let valorCalculado;

for (let index = 0; index <= valor; index++) {

  if (valor % 2 == 0) {
    numeroPar += 2;
    valorCalculado = Math.pow(numeroPar, 2);

    if (numeroPar <= valor) {

      if (numeroPar >= 4) {
        console.log(`${numeroPar} ^ ${2} = ${valorCalculado}`);
        continue;
      }

      console.log(`${numeroPar} ^ ${numeroPar} = ${valorCalculado}`);
    }
  }
}