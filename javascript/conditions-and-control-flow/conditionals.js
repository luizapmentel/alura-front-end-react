const idade = 17;

// Condicional simples
if (idade >= 18) {
    console.log('Maior de idade');
}

if (idade < 18) {
    console.log('Menor de idade');
}

// Condicional composta
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

// Condicional encadeada
const notaDoAluno = 9

// Entre 9 e 10: excelente
// Entre 7 e 8: bom
// Entre 4 e 6: regular
// Entre 0 e 3: ruim

if (notaDoAluno >= 9) { 
    console.log('Excelente')
} else if (notaDoAluno >= 7) { 
    console.log('Bom')
} else if (notaDoAluno >= 4) { 
    console.log('Regular')
} else { 
    console.log('Ruim')
}

// Condicional aninhada 
const temCarteira = false

if (idade >= 18) {
    if (temCarteira) {
        console.log("Pode dirigir");
    }
}

// Operador ternário
idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')