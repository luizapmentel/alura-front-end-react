/*
Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.
Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.

Valores falsy: false, 0, "", null, undefined, NaN. 
Qualquer valor que não esteja nessa lista é automaticamente considerado truthy.
*/

if (0) {
    console.log('Truthy')
} else { 
    console.log('Falsy') 
}

if ('') {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

if (null) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

if (undefined) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

if ('Olá') {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

if (42) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}