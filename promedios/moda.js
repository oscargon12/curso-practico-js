/* const lista1 = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 2, 1
]; //Este array se va a convertir en objeto */


const findModa = (lista1) => {

    const lista1Count = {} // Lo dejo como un objeto vacio
    
    lista1.map( // map recorre el array, para alimentar al objeto lista1Count
        function (elemento){
            if(lista1Count[elemento]){ //Cuando ya existe, no será igual a 1
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1; //Guarda un valor que se llame igual q nuestro elemento (elemento son los indices de list1)
            }
        } 
    )
    
    //Convirtiendo en un array de arrays y Ordenando la posición del array que indica las repeticiones
    //Object.entries recibe como parametro un objeto que se convertira en array
    const lista1Array = Object.entries (lista1Count).sort((elementoA, elementoB) => { 
        return elementoA[1] - elementoB[1] // Si eso es real el resultado es positivo
        //Se usa [1] porque la segunda posición de cada array, es el numero de repeticiones
     }
    ); 
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}

