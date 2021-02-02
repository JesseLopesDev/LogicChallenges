let input = require('fs').readFileSync('./stdin', 'utf8');

let [horaInicial, horaFinal] = input.split(' ')
  .map(item => parseInt(item));

let horaMaxima = 24;

let duracaoDoJogo;

if (horaInicial > horaFinal) {
  duracaoDoJogo = (horaMaxima - horaInicial) + horaFinal;
  console.log(`O JOGO DUROU ${duracaoDoJogo} HORA(S)`);
} else if (horaInicial < horaFinal) {
  duracaoDoJogo = horaFinal - horaInicial;
  console.log(`O JOGO DUROU ${duracaoDoJogo} HORA(S)`);
} else {
  console.log(`O JOGO DUROU 24 HORA(S)`);
}