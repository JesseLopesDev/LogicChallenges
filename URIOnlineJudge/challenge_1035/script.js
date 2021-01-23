let input = require("fs").readFileSync("./stdin", "utf8");

let [valorA, valorB, valorC, valorD] = input.split(" ")
  .map((item) => parseInt(item));

if (valorB > valorC && valorD > valorA && valorC + valorD > valorA + valorB) {
  if ((valorC && valorD) > 0) {
    if (valorA % 2 == 0) {
      console.log("Valores aceitos");
    }
  }
} else {
  console.log("Valores nao aceitos");
}