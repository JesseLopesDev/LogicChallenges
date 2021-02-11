let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let salario = parseFloat(value.shift());

let aliquotaFaixa2;
let aliquotaFaixa3;
let aliquotaFaixa4;
let calculoFaixasAnteriores1;
let calculoFaixasAnteriores2;
let deducao;

if (salario <= 2000.00) {
  console.log('Insento');
} else if (salario <= 3000.00) {
  aliquotaFaixa2 = 8 / 100;
  deducao = ((salario - 2000.00) * aliquotaFaixa2);
  console.log(`R$ ${deducao}`);
} else if (salario <= 4500.00) {
  aliquotaFaixa3 = 18 / 100;
  calculoFaixasAnteriores1 = (3000.00 - 2000.00) * (8 / 100);
  deducao = ((salario - 3000.00) * aliquotaFaixa3) + calculoFaixasAnteriores1;
  console.log(`R$ ${deducao}`);
} else {
  aliquotaFaixa4 = 28 / 100;
  calculoFaixasAnteriores2 = ((4500.00 - 3000.00) * (18 / 100)) + ((1000.00 * (18 / 100)));
  deducao = ((salario - 4500.00) * aliquotaFaixa4) + calculoFaixasAnteriores2;
  console.log(`R$ ${deducao}`);
}