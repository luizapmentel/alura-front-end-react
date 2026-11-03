// While: primeiro verifica uma condição, depois executa o bloco de código enquanto a condição for verdadeira

let contador = 1

while (contador <= 10) {
    console.log('Número atual:', contador)
    contador++
}

// Do...while: primeiro executa, depois verifica a condição. Garante que o bloco de código seja executado pelo menos uma vez.

let numero = 1

do {
    console.log('Número atual:', numero);
    numero++
} while (numero <= 10)
