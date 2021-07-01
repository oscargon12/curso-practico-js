// Código del cuadrado

console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(`Cada lado del cuadrado mide ${ladoCuadrado} centímetros`);

function perimetroCuadrado (lado){
    return lado * 4;
} 

perimetroCuadrado();

// console.log(`El area del cuadrado es ${perimetroCuadrado} centímetros`);

function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd();

// Triangulo

console.group('Triangulos')

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Circulos

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
    const diametro = diametroCirculo(radio) // Para calcular elperimetro, debo llamar la función diametroCirculo

    return diametro * PI;
} 

// Area
function areaCirculo (radio) {
 return (radio * radio) * PI;
}
console.groupEnd();
