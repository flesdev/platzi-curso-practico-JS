function calcularMediana (prelista) {
    let lista = prelista.sort(
        function (a, b) {
            return a - b;
        }
    );
    
    console.log(lista);

    const mitadLista = parseInt(lista.length / 2);

    console.log(mitadLista);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElementos;
    } else {
        mediana = lista[mitadLista];
    }

    console.log('La mediana es ' + mediana);

    function esPar (numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
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
}