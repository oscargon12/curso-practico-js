/* 
1. Creo un array con solo los salarios
2. Ordeno los salarios
3. Creo una función reusable, para saber si el número de salarios es par
4. Creo una función reusable que calcules promedios (metodo reduce)
5. Creo la función principal que cacula la mediana de salarios 

*/
const salariosCol = colombia.map((personita) =>{
    return personita.salary //Crea un nuevo array (salariosCol) con solo salarios
});

//Sorting salaries
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
)

//Calculando la mediana
const isPar = (numerito) => {
    return numerito % 2 === 0; // If(numerito % 2 === 0;)
}

//🔹Función 1: calcula promedios, servirá si el array tiene un numero de elementos par
const calcProm = (list1) => { //Reduce va sumando acumulativamente los elementos del array
    const sumResult = list1.reduce((addedValue = 0, newValue) => { // Si no hay nada, el acumulado es 0
        return addedValue + newValue;
    })

    let promResult = sumResult / list1.length; 
    return promResult
}

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

console.log(medianaSalarios(salariosColSorted));