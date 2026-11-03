// Estrutura do laço de repetição For
// 1. Variável inicializada (um valor para começar; existirá apenas dentro do bloco for)
// 2. Condição (número de execuções; uma condição a ser atendida, etc)
// 3. Incremento (de 1 em 1, de 2 em 2, etc)

// Contagem sequencial
for(let contador = 1; contador <= 5; contador++) {
    console.log('Número atual:', contador)
}


// Identificando números pares em um intervalo
for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 === 0) {
        console.log('Número par encontrado:', numero)
    }
}

// Identificando números ímpares em um intervalo
for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log('Número ímpar encontrado:', numero)
    }
}

// Percorrendo letras em uma palavra
const palavra = 'institucional'

// palavra.lenghth = indica quantos caracteres uma string possui
// palavra[1] = captura a letra na posição indicada

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}

// For...of: itera diretamente sobre os elementos da string, removendo o uso de índices
const palavra2 = 'exemplo'

for (const caractere of palavra2) {
  console.log(caractere);
}