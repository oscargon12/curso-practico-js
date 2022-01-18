//TODO
// Pregunta a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar
/* const addTest = () =>{
    const value = 2 + 2;
    let result;

    do {
        result = parseInt(prompt('¿Cuanto es 2 + 2?'))
    } while (result !== value);
    if(result === value){
        console.log('Exacto!')
    }
}
addTest(); */


//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

const loopWh = () => {
    let j = 0;
    while (j < 5){
        console.log('El valor de j es ' + j)
        j++;
    }
}
loopWh(); */

/* for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

const loopWh2 = () => {
    let index = 10;
    while(index >= 2){
        console.log('El valo de index es ' + index);
        index--
    }
}
loopWh2(); */


// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
/* const firstItem = (arr) => {
    console.log(arr[0]);
}
firstItem(['Hamburguesas', 'Lasagna', 'Empanadas', 'Sushi']); */


// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
/* const allItems = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(`Quiero comer ${arr[i]}`)
    }
}
allItems(['Hamburguesas', 'Lasagna', 'Empanadas', 'Sushi']);
 */


// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const allKeys = (obj) => {
    for(let i = 0; i < obj.length; i++ ){
        console.log(`Estos son los valores ${obj.i}`)
    }
}
allKeys({
    name: 'Jhon',
    lastName: 'Snow',
    pet: true,
    petName: 'Ghost'
})