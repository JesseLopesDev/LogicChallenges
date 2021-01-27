let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let [notaA, notaB, notaC, notaD] = values.shift().split(' ');

let media = ((notaA * 2.0) + (notaB * 3.0) + (notaC * 4.0) + (notaD * 1.0)) / 10;

console.log(`Media: ${media}`);

let notaE = parseFloat(values.shift());

if (media >= 7.0) {
  console.log('Aluno aprovado.');
} else if (media >= 5.0 && media <= 6.9) {
  console.log('Aluno em exame.');
  console.log(`Nota do exame: ${notaE}`);
} else {
  console.log('Aluno reprovado.');
}

media = (media + notaE) / 2;

if (media >= 5.0) {
  console.log('Aluno aprovado.');
} else {
  console.log('Aluno reprovado.');
}

console.log(`Media final: ${media}`);