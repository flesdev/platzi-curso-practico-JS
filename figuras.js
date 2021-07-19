// Código del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log('Lados de cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');
console.groupEnd();

// Código del triángulo
console.group('Triangulos');
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triangulo miden: ' + ladoTriangulo + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm.');
console.log('La altura del triángulo es: ' + alturaTriangulo)

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del triángulo es: ' + perimetroTriangulo + 'cm');

const areaTriangulo = ( baseTriangulo * alturaTriangulo ) / 2;
console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');
console.groupEnd();

// Código del Circulo
console.group('Circulos');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + 'cm');

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('El diámetro del circulo es: ' + diametroCirculo + 'cm');

// PI
const pi = Math.PI;
console.log('El valor de pi es: ' + pi);

// Perimetro
const perimetroCirculo = diametroCirculo * pi;
console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

// Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log('El área del circulo es: ' + areaCirculo + 'cm^2');


console.groupEnd();