/* function calcularMediaPonderada(lista) {}; */

const myArray = [
    { course: 'Math', note: 19, credit: 2},
    { course: 'Comunication', note: 15, credit: 2},
    { course: 'Science & Technology', note: 16, credit: 2},
    { course: 'Social Sciences', note: 19, credit: 2},
    { course: 'English', note: 16, credit: 1},
    { course: 'Physical Education', note: 17, credit: 1}
];

const noteWithCredit = myArray.map(function (x) {
        return x.note * x.credit;
});

const sumaNotes = noteWithCredit.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
});

const credits = myArray.map(function (x) {
        return x.credit;
});

const sumaCredits = credits.reduce(function(x = 0, y){
    return x + y;
});

const calcularPromedioP = sumaNotes / sumaCredits;

console.log(calcularPromedioP);