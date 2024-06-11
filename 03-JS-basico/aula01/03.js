const prompt = require('readline-sync');

const idade = prompt.question('Qual é a sua idade? ');

const idadeNumber = Number(idade);

console.log('O usuário tem', idade, 'anos de idade.');
console.log(idadeNumber, ",é do tipo:", typeof(idadeNumber));

// Coerção Explícita (Conversão Manual)

console.log(Number("X")); // NaN: Not a Number
console.log(String(10), typeof String(10));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

// Coerção Implícita

console.log(1 + "1");
console.log("10" + 5);
console.log(10 - "5");
console.log("5" * 10);
console.log(10 / "5");
 
// Qual será a saída desse código?

let n = 1 + "1";   // "11" (string)
n = n - 1;         // 11 - 1 = 10
console.log(n);    // n = 10

// Qual será a saída desse código?

numero = 2 + 3 + 4 + "5";
console.log(typeof(numero));
console.log(2 + 3 + 4 + "5");  // 2 + 3 + 4 = 9 -> 9 + "5" = "95" (string)

// Qual será a saída desse código?

console.log("5" + 2 + 3 + 4);  // "5" + 2 = "52" + 3 = "523" + 4 = "5234" (string)

// Qual será a saída desse código?

console.log("10" - "4" - "3" - 2 + "5"); // "10" - "4" = 6 - "3" = 3 - 2 = 1 + "5" = "15" (string)
