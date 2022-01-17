console.log("Trabalhando com atribuição de variáveis");

const idade = 34;
let nome = "Natália";
const sobrenome = "Lira";

console.log(nome + sobrenome); //desta forma sai junto
console.log(nome + " " + sobrenome); // Forma 1 com espaço
console.log(nome , sobrenome); // Forma 2 com espaço

// Outra forma de trabalhar com texto strings declaração com crase ``
// interpolação de variável acontece quando usamos a crase entre elas ${}
console.log(`Meu nome é ${nome} ${sobrenome}`);
console.log(`Meu nome é ${nome + sobrenome}`); // a virgula não funciona neste caso

// sobre escrevendo a variável , não funciona se a variável anterior era uma const (constante)
// let --> variável comum que pode variar ou mudar
nome = nome + sobrenome;
console.log(nome);

// Boas Praticas ,reduza ao maximo reatribição de variável use const
// let é bastante usada em contador