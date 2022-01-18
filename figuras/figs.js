// Código del cuadrado

console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(`Cada lado del cuadrado mide ${ladoCuadrado} centímetros`);

function perimetroCuadrado (lado){ //🔸 Se usará con la función que conecta con el html
    return lado * 4;
} 

perimetroCuadrado();

// console.log(`El area del cuadrado es ${perimetroCuadrado} centímetros`);

function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd();

// == Triangulo ==

console.group('Triangulos')

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function alturaIsosceles(lado1, lado2, base){
    return Math.sqrt((lado1 * lado2) - ((base * base) / 4));
}

console.groupEnd();


//== Circulos ==

console.group('Círculos');
// Radio
// let radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo} cm`)

// Diametro

const diametroCirculo = (radio) =>{
    return radio * 2;
}

// PI
let PI = Math.PI;

// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio) // Para calcular el perimetro, debo llamar la función diametroCirculo
                                            // diametro es igual a la función diametroCirculo(radio)
    return diametro * PI; 
} 

// Area
function areaCirculo (radio) {
 return (radio * radio) * PI;
}
console.groupEnd();


// ********* Conectando con el html ********* //

// == Cuadrado ==
const calcularPerimetroCuadrado = () => {
    const userInput = document.querySelector('#InputCuadrado'); // Capturo el elemento html input
    const userValue = userInput.value; // Capturo el valor que ingresa el usuario

    const perimetro = perimetroCuadrado(userValue); //🔸 El valor a mostrar se saca aprovechando la función perimetroCuadarado() de más arriba

    alert(perimetro); // Se muestra el valor del perimetro
}

// Repito todo con el área
const calcularAreaCuadrado = () => {
    const userInput = document.querySelector('#InputCuadrado'); 
    const userValue = userInput.value;

    const area = areaCuadrado(userValue); 
    alert(area); 
}

// Input triangulos
const calcularPerimetroTriangulo = () =>{
    const userInput1 = document.querySelector('#InputLado1');
    const userValue1 =  parseInt(userInput1.value);

    const userInput2 = document.querySelector('#InputLado2');
    const userValue2 = parseInt(userInput2.value);

    const inputBase = document.querySelector('#InputBase');
    const userBase = parseInt(inputBase.value);

    const perimetroTri = perimetroTriangulo(userValue1, userValue2, userBase);

    alert(perimetroTri);
}

// Area triagulo
const calcularAreaTriangulo = () =>{
    const inputBase = document.querySelector('#InputBase');
    const userBase = parseInt(inputBase.value);

    const inputHeight = document.querySelector('#InputHeight');
    const userHeight = parseInt(inputHeight.value);

    const areaTri = areaTriangulo(userBase, userHeight)

    alert(areaTri);
}


// === Calcular circulo ===

// Perimetro
const calcularPerimetroCirculo = () =>{
    const inputRadio = document.querySelector('#InputCirculo'); // Capturo elemento html input
    const userRadio = parseInt(inputRadio.value); // capturo valor ingresado en ese elemento html

    const perimetroCir = perimetroCirculo(userRadio); // Uso ese valor como argumento en la función de calcular

    alert(perimetroCir); // Imprimo el valor de la funcion calcular con ese argumento
}

const calcularAreaCirculo = () =>{
    const inputRadio = document.querySelector('#InputCirculo');
    const userRadio = parseInt(inputRadio.value);

    const areaCir = areaCirculo(userRadio);

    alert(areaCir);
}


// === Triangulo isosceles ===
const calcularAlturaTriangulo = () =>{ // Ese nombre de función, debe ir en el onClick  
    const ladoA = document.querySelector('#InputLado1');
    const ladoAValue = parseInt(ladoA.value);

    const ladoB = document.querySelector('#InputLado2');
    const ladoBValue = parseInt(ladoB.value);

    const base = document.querySelector('#InputBase');
    const baseValue = parseInt(base.value);

    const alturaIsos = alturaIsosceles(ladoAValue, ladoBValue, baseValue);

    (ladoAValue === ladoBValue)
    ? alert(`La altura del triangulo es ${alturaIsos}`)
    : alert('Los lados del triángulo isosceles deben ser iguales')
}