// HELPERS

function esPar (numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {

    /* let sumaList = 0;

    for (let i = 0; i < list.length; i++ ) {
    sumaList = sumaList + list[i]
    } */

    const sumaList = lista.reduce(
        function (valorAcumulado = 0, nuevoElemto) {
            return valorAcumulado + nuevoElemto;
        }
    )

    const promedio = sumaList / lista.length;
    return promedio;
}

// CALCULADORA DE MEDIANA

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const peronaMitad = lista[mitad];
        return peronaMitad;
    }
}

// MEDIANA GENERAL

const salariosPe = peru.map(
    function (x) {
        return x.salary;
});

const salariosOrdenados = salariosPe.sort(
    function (x, y) {
        return x - y;
});

const medianaGeneralPe = medianaSalarios(salariosOrdenados);

// MEDIANA DEL TOP 10%

const spliceStart = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;

const salariosTop10 = salariosOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Pe = medianaSalarios(salariosTop10);


console.log({
    medianaGeneralPe,
    medianaTop10Pe
});