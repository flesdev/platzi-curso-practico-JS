// CÓDIGO DEL CUADRADO

console.group('Cuadrados');

const ladoCuadrado = 5;
console.log('Lados de cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// CÓDIGO DEL TRIANGULO

console.group('Triangulos');

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triangulo miden: ' + ladoTriangulo + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm.');
console.log('La altura del triángulo es: ' + alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) /2;
}

console.groupEnd();

// CÓDIGO DEL CIRCULO

console.group('Circulos');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + 'cm');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
console.log('El diámetro del circulo es: ' + diametroCirculo + 'cm');

// PI
const pi = Math.PI;
console.log('El valor de pi es: ' + pi);

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();