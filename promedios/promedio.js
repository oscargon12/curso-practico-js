const listProm = (list1) => {
    /* let sumResult = 0;

    for(let i = 0; i < list1.length; i++){
        sumResult = sumResult + list1[i];
    } */

    //El reduce itera el array acumulando la sume de los valores del array
    const sumResult = list1.reduce((addedValue = 0, newValue) => { // Si no hay nada, el acumulado es 0
        return addedValue + newValue;
    })

    let promResult = sumResult / list1.length; 
    console.log(promResult)
}