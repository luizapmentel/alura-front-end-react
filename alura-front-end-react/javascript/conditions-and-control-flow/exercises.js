// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

const idade = 18

if (idade >= 18) {
    console.log('Pode comprar bebida alcoólica')
} else {
    console.log('Venda proibida para menores de 18 anos')
}

// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

const horaAtual = 12

if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia')
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

const numeroQualquer = 10

if (numeroQualquer > 0) {
    console.log('Positivo')
} else if (numeroQualquer < 0) {
    console.log('Negativo')
} else {
    console.log('Igual a zero')
}

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).

const nota = 4

if (nota >= 9) {
    console.log('A')
} else if (nota >= 8) {
    console.log('B')
} else if (nota >= 6) {
    console.log('C')
} else if (nota >= 4) {
    console.log('D')
} else {
    console.log('E')
}

// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

const numero = 1
const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar'
console.log('O número é:' + resultado)

// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

const opcao = 1
switch (opcao) {
    case 1:
        console.log('1 - Cadastrar')
        break
    case 2: 
        console.log('2 - Listar')
        break
    case 3: 
        console.log('3 - Sair')
        break
}

// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

const email = ''

if (email === '') {
    console.log('Preencha o campo de e-mail')
} else {
    console.log('E-mail válido')
}

// 8. Validação de senha segura
// Crie duas variáveis: senha e senhaValida (valor true ou false, definido manualmente)
// Se senhaValida for verdadeira, mostre "Senha válida".
// Caso contrário, mostre "Senha muito curta".
// Obs.: Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.

const senha = 'abcdefgh' 
const senhaValida = true

if (senhaValida) {
    console.log('Senha válida')
} else {
    console.log('Senha muito curta')
}

// 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

const saldoDisponivel = 100
const valorCompra = 150

if (saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada')
} else {
    console.log('Saldo insuficiente')
}

// 10. Validação de formulário completo
// Crie três variáveis: nome, email e idade. Crie também uma variável booleana chamada formularioValido que indica se o formulário está válido (true ou false).
// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".
// Obs.: Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.

const nome = 'Luiza'
const email2 = 'luiza@email.com'
const idade2 = 24
const formularioValido = true

if (formularioValido) {
    console.log('Formulário enviado com sucesso')
} else {
    console.log('Por favor, preencha todos os campos corretamente')
}