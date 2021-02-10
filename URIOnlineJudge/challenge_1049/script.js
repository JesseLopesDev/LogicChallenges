let input = require('fs').readFileSync('./stdin', 'utf8');
let values = input.split('\n');

let valorA = values.shift();
let valorB = values.shift();
let valorC = values.shift();

if (valorA == 'vertebrado') {
  if (valorB == 'ave') {
    if (valorC == 'carnivoro') {
      console.log('aguia');
    } else if (valorC == 'onivoro') {
      console.log('pombo');
    }
  } else if (valorB == 'mamifero') {
    if (valorC == 'onivoro') {
      console.log('homem');
    } else if (valorC == 'herbivoro') {
      console.log('vaca');
    }
  }
} else if (valorA == 'invertebrado') {
  if (valorB == 'inseto') {
    if (valorC == 'hematofago') {
      console.log('pulga');
    } else if (valorC == 'herbivoro') {
      console.log('lagarta');
    }
  } else if (valorB == 'anelideo') {
    if (valorC == 'hematofago') {
      console.log('sanguessuga');
    } else if (valorC == 'onivoro') {
      console.log('minhoca');
    }
  }
}