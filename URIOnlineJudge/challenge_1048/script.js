let input = require('fs').readFileSync('./stdin', 'utf8');
let value = input.split('\n');

let salario = parseFloat(value.shift());

let percentualDeReajuste;

if (salario <= 400.00) {
  percentualDeReajuste = 15;
  valorDoReajuste = salario * (percentualDeReajuste / 100);
  salarioReajustado = salario + valorDoReajuste;

  console.log(`Novo salario: ${salarioReajustado.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorDoReajuste.toFixed(2)}`);
  console.log(`Em prercentual: ${percentualDeReajuste} %`);
} else if (salario <= 800.00) {
  percentualDeReajuste = 12;
  valorDoReajuste = salario * (percentualDeReajuste / 100);
  salarioReajustado = salario + valorDoReajuste;

  console.log(`Novo salario: ${salarioReajustado.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorDoReajuste.toFixed(2)}`);
  console.log(`Em prercentual: ${percentualDeReajuste} %`);
} else if (salario <= 1200.00) {
  percentualDeReajuste = 10;
  valorDoReajuste = salario * (percentualDeReajuste / 100);
  salarioReajustado = salario + valorDoReajuste;

  console.log(`Novo salario: ${salarioReajustado.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorDoReajuste.toFixed(2)}`);
  console.log(`Em prercentual: ${percentualDeReajuste} %`);
} else if (salario <= 2000.00) {
  percentualDeReajuste = 7;
  valorDoReajuste = salario * (percentualDeReajuste / 100);
  salarioReajustado = salario + valorDoReajuste;

  console.log(`Novo salario: ${salarioReajustado.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorDoReajuste.toFixed(2)}`);
  console.log(`Em prercentual: ${percentualDeReajuste} %`);
} else {
  percentualDeReajuste = 4;
  valorDoReajuste = salario + (salario * (percentualDeReajuste / 100));
  salarioReajustado = salario + valorDoReajuste;

  console.log(`Novo salario: ${salarioReajustado.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorDoReajuste.toFixed(2)}`);
  console.log(`Em prercentual: ${percentualDeReajuste} %`);
}