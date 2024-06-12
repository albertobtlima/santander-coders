const prompt = require("readline-sync");

let cnh;
let temCnh;
const idade2 = Number(prompt.question("Qual é a sua idade? "));
const ehMaiorDeIdade2 = idade2 >= 18;

if (ehMaiorDeIdade2) {
    cnh = Number(prompt.question("Você possui CNH? [1 sim][2 não] "));
    temCnh = cnh === 1;
} else {
    console.log("Apenas maiores de idade podem dirigir.")
}

if (ehMaiorDeIdade2 && temCnh) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}