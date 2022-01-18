console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 20;
const estaAcompanhada = false; // tipo logico
const temPassagemComprada = true;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

// if --> se o Comprador for maior de idade o bloco roda
// if (idadeComprador >= 18) {
//   console.log(`Comprador maior de idade!`);
//   listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//   // não precisa realizar a comparação pq o valor já foi declarado
//   console.log(`Comprador está acompanhado`);
//   listaDeDestinos.splice(1, 1); // removendo item
// } else {
//   console.log(`Não é maior de Idade e não posso vender`);
// }

// tome cuidado com condicionais

//Operadores lógicos encadeados  ( ou --> || ) (e --> &&)

if (idadeComprador >= 18 || estaAcompanhada == true) {  
  console.log(`Boa viagem!!`);
  listaDeDestinos.splice(2, 1); // removendo item                         
} else {
  console.log(`Não é maior de Idade e não posso vender`);
}

console.log('\n Embarque: \n');
if(idadeComprador >= 18 && temPassagemComprada){
    console.log(`Boa viagem!!`);
}else{
    console.log(`Você não pode embarcar !!`);
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18); // atentar a diferença de == para ===
