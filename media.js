function calcularMediaAritmetica(list) {

    /* let sumaList = 0;

    for (let i = 0; i < list.length; i++ ) {
    sumaList = sumaList + list[i]
    } */

    const sumaList = list.reduce(
        function (valorAcumulado = 0, nuevoElemto) {
            return valorAcumulado + nuevoElemto;
        }
    )

    const promedio = sumaList / list.length;
    return promedio;
}