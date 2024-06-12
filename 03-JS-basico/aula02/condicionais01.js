const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual é a sua idade? "));

const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (ehMaiorDeIdade) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}

const mediaDoAluno = 6;

if (mediaDoAluno >= 7) {
    console.log("Aprovado :)");
} else if (mediaDoAluno >= 5) {
    console.log("Recuperação :|");
} else {
    console.log("Reprovado :(")
}

//--------------------------------------------------------------------------

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH
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
