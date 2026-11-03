// Estrutura do laço de repetição for
// 1. variável inicializada (um valor para começar; existirá apenas dentro do bloco for)
// 2. condição (número de execuções)
// 3. incremento (de 1 em 1, de 2 em 2, etc)

for(let contador = 1; contador <= 5; contador++) {
    console.log('Número atual:', contador)
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 === 0) {
        console.log('Número par encontrado:', numero)
    }
}