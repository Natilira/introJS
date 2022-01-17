console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// adicionando item na lista dinamicamente com  .push 

listaDeDestinos.push(`Curitiba`);


console.log("Destinos Possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// Removendo item da lista 
// obs: array contagem de inicia em 0 
listaDeDestinos.splice(1,1); // (posição ,quantidade elementos a ser tirado)
console.log(listaDeDestinos);

// Para mostrar um unico elemento da lista

console.log(listaDeDestinos[1]);
