console.log("Conversão de tipos");

console.log("ano " + 2022);
console.log("2" + "2"); //concatena
console.log(parseInt("2")+ 2);  // parseInt converte o text "2" e numero 2 e faz a soma de 
//forma explicita 

// quando a operação não é uma soma e se usa esse sinal (+) que significa  
//tambem  que pode esta sendo realizada uma concatenação , o JS costuma converter implicitamente
// afinal não se divide, multiplica ou subtrai de texto (isso acontece quando o
// caracter é numero)

console.log("10" / "2"); 
console.log("10" - "2"); 
console.log("10" * "2"); 
console.log("natalia" / 2); // NaN --> Not a Number

// float

console.log(6.5);
console.log(6,5); // neste caso sai como espaço

// parseFloat
