// Código del cuadrado

console.group('Cuadrado');
const ladoCuadrado = 5;

console.log(`Cada lado del cuadrado mide ${ladoCuadrado} centímetros`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El area del cuadrado es ${perimetroCuadrado} centímetros`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado es ${areaCuadrado} centímetros cuadrados`);
console.groupEnd();

// Triangulo

console.group('Triangulo');
let lado1 = 6;
let lado2 = 6;
let lado3 = 4;

console.log(
    `Los lados del triangulo miden ${lado1} cm, ${lado2} cm y ${lado3} cm`
    )

let trianguloAltura = 5.5;

let trianguloPerimetro = lado1 + lado2 + lado3;

console.log(`El perimetro del triangulo es ${trianguloPerimetro}`)

let areaTriangulo = (lado3 * trianguloAltura) / 2
console.log(`El área del triangulo es ${areaTriangulo}`);

console.groupEnd();
