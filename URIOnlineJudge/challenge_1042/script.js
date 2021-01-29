let input = require('fs').readFileSync('./stdin', 'utf8');

let [valorA, valorB, valorC] = input.split(' ')
  .map(item => parseInt(item));

if (valorA < valorB && valorA < valorC) {
  console.log(valorA);

  if (valorB < valorC) {
    console.log(valorB);
    console.log(valorC);
  } else {
    console.log(valorC);
    console.log(valorB);
  }
} else if (valorB < valorC && valorB < valorA) {
  console.log(valorB);

  if (valorA < valorC) {
    console.log(valorA);
    console.log(valorC);
  } else {
    console.log(valorC);
    console.log(valorA);
  }
} else {
  console.log(valorC);

  if (valorA < valorB) {
    console.log(valorA);
    console.log(valorB);
  } else {
    console.log(valorB);
    console.log(valorA);
  }
}

console.log();
console.log(valorA);
console.log(valorB);
console.log(valorC);