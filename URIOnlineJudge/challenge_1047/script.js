let input = require('fs').readFileSync('./stdin', 'utf8');

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = input.split(' ')
  .map(item => parseInt(item));

let minutosPorHora = 60;

let minutosHoraInicial = (minutosPorHora * horaInicial) + minutoInicial;
let minutosHoraFinal = (minutosPorHora * horaFinal) + minutoFinal;

let totalEmMinutos = Math.abs(minutosHoraFinal - minutosHoraInicial);

let horas = parseInt(totalEmMinutos / minutosPorHora);
let minutos = parseInt(horas % minutosPorHora);

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);

