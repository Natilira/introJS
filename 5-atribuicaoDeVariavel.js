console.log("Trabalhando com atribuição de variáveis");

const idade = 34;
let primeiroNome = "Natália";
const sobrenome = "Lira";

console.log(primeiroNome + sobrenome); //desta forma sai junto
console.log(primeiroNome + " " + sobrenome); // Forma 1 com espaço
console.log(primeiroNome , sobrenome); // Forma 2 com espaço

// Outra forma de trabalhar com texto strings declaração com crase ``
// interpolação de variável acontece quando usamos a crase entre elas ${}
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
console.log(`Meu nome é ${primeiroNome + sobrenome}`); // a virgula não funciona neste caso

// sobre escrevendo a variável , não funciona se a variável anterior era uma const (constante)
// let --> variável comum que pode variar ou mudar
nome = nome + sobrenome;
console.log(nome);

// Boas Praticas ,reduza ao maximo reatribição de variável use const
// let é bastante usada em contador