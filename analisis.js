const salariosPe = peru.map(
    function (x) {
        return x.salary;
});

const salariosOrdenados = salariosPe.sort(
    function (x, y) {
        return x - y;
});

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

const salariosGeneralesPe = medianaSalarios(salariosOrdenados)

console.log(
    medianaSalarios(salariosOrdenados)
);