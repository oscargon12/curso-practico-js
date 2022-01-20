/*
1. Se divide el array en 2
1.5 Si el array tiene elementos par, la mediana es el promedio entre los 2 numeros centrales
2. condicional, si la mitad del array es parent, entonces...
*/

//Esta funcion calcula promedios, servirá si el array tiene un numero de elementos par
const calcProm = (list1) => {
    const sumResult = list1.reduce((addedValue = 0, newValue) => { // Si no hay nada, el acumulado es 0
        return addedValue + newValue;
    })

    let promResult = sumResult / list1.length; 
    return promResult
}

const numList = [10, 50, 80, 120];

const middle = parseInt(numList.length / 2);

//Numerito es el residuo de dividir numList.length / 2
const isPar = (numerito) =>{
    // numerito % 2 === 0 ? true : false
    if(numerito % 2 === 0){
        return true;
    } else {
        return false
    }
}

let mediana;

// Si isPar con el argumento (numList.length)
if (isPar(numList.length)){
    let central1 = numList[middle - 1]; //El 1er central es la mitad parseada - 1 indice 
    let central2 = numList[middle]; //El 2do central es la mitad parseada 

    const promCentrales = calcProm([central1, central2]); //Se deben promediar los numeros centrales del array
    mediana = promCentrales; //Mediana es igual al promedio de los centrales

} else{
    mediana = numList[middle]; //mediana = la mitad de numList
}