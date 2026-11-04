// 1. Tabela de conversão de temperatura
// Monte uma tabela convertendo Celsius para Fahrenheit, de 0 °C até 100 °C, de 10 em 10 graus.
// A fórmula é F = C * 9 / 5 + 32.

// Saída esperada, uma linha por temperatura:
// 0°C = 32°F
// 10°C = 50°F

for (let celsius = 0; celsius <= 100; celsius += 10) {
    let f = (celsius * 9) / 5 + 32
    console.log(celsius, '°C =', f, '°F')
}

// 2. Fatorial de um número
// O fatorial de 5 é 5 × 4 × 3 × 2 × 1 = 120. Crie uma variável numero e calcule o fatorial dela.

// Depois refaça o mesmo exercício trocando o for por while. O objetivo aqui é sentir na mão que os dois laços fazem a mesma coisa com sintaxes diferentes.

// Teste com numero = 0. O fatorial de zero é 1 — o seu código devolve isso sozinho ou você precisou tratar o caso?

let numero = 5
let fatorial = 1

for (let i = 1; i < numero; i++) {
    fatorial = fatorial * i
    console.log('Número atual:' + i)
}

/* let numero = 0
let fatorial = 1
let contador = numero

while (contador > 1) {
    fatorial = fatorial * contador
    contador--
}

console.log(numero + '! = ' + fatorial) */