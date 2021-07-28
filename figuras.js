/* ================ CÓDIGO DEL CUADRADO ================ */

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

/* ================ CÓDIGO DEL TRIÁNGULO ================ */

let base;
let otrolado;

function ladoBase(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        base = lado1;
        otrolado = lado2;
    } else if (lado1 >= lado2) {
        if (lado2 > lado3) {
            if (lado1 == lado2) {
                base = lado3;
                otrolado = lado2;
            } else {
                base = lado1;
                otrolado = lado2;
            }
        } else if (lado3 > lado1) {
            if (lado3 == lado1) {
                base = lado2;
                otrolado = lado1; 
            } else {
                base = lado3;
                otrolado = lado1;
            }
        }
    } else if (lado2 > lado1) {
        if (lado2 == lado3) {
            base = lado1;
            otrolado = lado2;
        } else if (lado2 > lado3) {
            base = lado2;
            otrolado = lado1;
        } else {
            base = lado3;
            otrolado = lado1;
        }
    } else {
        console.log('no funciono!!!!');
    } return base;
}
function pitagoras(base, lado) {
    let b = base / 2;
    let c = lado;
    let a = Math.sqrt(( c * c ) - ( b * b ));
    console.log(a);
    return a;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) /2;
}

console.groupEnd();

/* ================ CÓDIGO DEL CIRCULO ================ */

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

/* ================ CÓDIGO CON INTERACIÓN CON EL CÓDIGO DE HTML ================ */

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = Number(input.value);
    const area = areaCuadrado(value);
    alert(area);
}
function calcularAlturaTriangulo() {
    const inputBase = document.getElementById('inputTrianguloBase');
    const base = Number(inputBase.value);

    const inputLado1 = document.getElementById('inputTrianguloLado');
    const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById('inputTrianguloLado2');
    const lado2 = Number(inputLado2.value);

    const baseTriangulo = ladoBase(lado1, lado2, base);
    const ladoTriangulo = otrolado;
    const altura = pitagoras(baseTriangulo, ladoTriangulo);
    alert('La altura de tu triangulo es ' + altura);

}
function calcularPerimetroTriangulo() {
    const inputBase = document.getElementById('inputTrianguloBase');
    const base = Number(inputBase.value);

    const inputLado1 = document.getElementById('inputTrianguloLado');
    const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById('inputTrianguloLado2');
    const lado2 = Number(inputLado2.value);
 
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert('El perimetro de tu triangulo es ' + perimetro + '.');
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputTrianguloBase');
    const base = Number(inputBase.value);

    const inputAltura = document.getElementById('inputTrianguloAltura');
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert('El área de tu triángulo es ' + area + '.');
}
function calcularPerimetroCirculo() {
    const input = document.getElementById('inputCirculo');
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById('inputCirculo');
    const value = Number(input.value);
    const area = areaCirculo(value);
    alert(area);
}