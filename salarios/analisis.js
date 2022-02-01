/* 
1. Creo un array con solo los salarios
2. Ordeno los salarios
3. Creo una función reusable, para saber si el número de salarios es par
4. Creo una función reusable que calcules promedios (metodo reduce)
5. Creo la función principal que cacula la mediana de salarios 
*/

// TODO Funciones helpers: No son parte de la logica del negocio, pero se necesitan para los calculos

const isPar = (numerito) => {
    return numerito % 2 === 0; // If(numerito % 2 === 0;)
}

//Función: calcula promedios, servirá si el array tiene un numero de elementos par
const calcProm = (list1) => { //Reduce va sumando acumulativamente los elementos del array
    const sumResult = list1.reduce((addedValue = 0, newValue) => { // Si no hay nada, el acumulado es 0
        return addedValue + newValue;
    })

    const promResult = sumResult / list1.length; 
    return promResult
}

//Calculadora de medianas🔹
const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if (isPar(lista.length)){ //Consumo la función esPar para saber si es par
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcProm([personitaMitad1, personitaMitad2]);
        return mediana;
    } else { //Si no es par
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}

//Mediana General
const salariosCol = colombia.map((personita) =>{
    return personita.salary //Crea un nuevo array (salariosCol) con solo salarios
});                         // output [500, 400, 700, 400, 500, ...]

//Sorting salaries
const salariosColSorted = salariosCol.sort( //ordena el array salariosCol
    function (salaryA, salaryB){            // output [400, 400, 400, 500, 500, ...]    
        return salaryA - salaryB;
    }
)

//🔹 Reutilizo la calculadora de medianas para dar valor al medianaGeneralCol
const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; //Donde empieza a cortar el cuchillo
const spliceCount = salariosColSorted.length - spliceStart; //Hasta donde corta el cuchillo

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, spliceCount
); 

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col
});