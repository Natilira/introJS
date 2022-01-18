console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 20;
const estaAcompanhada = false; // tipo logico
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\nDestinos possíveis: `);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

// while --> enquanto essa condição for verdadeira vou executar esse bloco

while (contador < 3){

    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador = contador + 1 
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!!");
}else{
    console.log("Desculpe tivemos um erro. ");
}

for (let cont = 0 ; cont < 3 ; cont ++){  // geralmente essa variavel cont é representada por i 
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }

}