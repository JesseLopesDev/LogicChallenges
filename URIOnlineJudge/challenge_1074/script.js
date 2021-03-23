const input = require('fs').readFileSync('./stdin', 'utf8');
const values = input.split('\n');

const valores = [5];

for (let index = 0; index <= 5; index++) {
  valores[index] = parseInt(values.shift());
  
  if (valores[index] % 2 == 0) {
    if (valores[index] > 0) {
      console.log(`EVEN POSITIVO`);
    }
  }

  if (valores[index] % 2 != 0) {
    if (valores[index] < 0) {
      console.log(`ODD NEGATIVO`);
    }
  }

  if (valores[index] == 0) {
    console.log(`NULL`);
  }  
  
  if (valores[index] % 2 != 0) {
    if (valores[index] > 0) {
      console.log(`ODD POSITIVO`);
    }
  }

  if (valores[index] < 0) {
    if (valores[index] % 2 == 0) {
      console.log(`EVEN NEGATIVO`);
    }  
  }  
}