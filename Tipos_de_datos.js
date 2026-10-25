// --- Variables con let (pueden cambiar) ---
let nombre = 'julio';
let edad = 25;
let estaAprendiendo = true;

// --- Imprime cada variable ---
console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);
// Imprime las otras dos variables que declaraste

// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // ¿Qué tipo es?
console.log(typeof edad);         // ¿Qué tipo es?
console.log(typeof estaAprendiendo); // ¿Qué tipo es?
// Usa typeof para verificar el tipo de 'edad' y 'estaAprendiendo'
// ¿Qué esperas que diga? Escríbelo en un comentario antes de ejecutar
// Espero que diga 'number' para edad y 'boolean' para estaAprendiendo y que diga 'string' para nombre


// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
const maxIntentos = 10;
// Declara una constante 'maxIntentos' con valor 10

// Imprime ambas constantes con console.log()
console.log(curso);
console.log(maxIntentos);

// Descomenta la siguiente línea y observa qué pasa:
 
//maxIntentos = 20;

 // no se puede reasignar una constante, por lo que esto generará un error.


 // --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'
let edadUsuario = prompt('¿Cuántos años tienes?');

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
// Imprime la edad y su tipo de dato (usa typeof)
console.log('Edad:', edadUsuario);
console.log('Tipo de dato de la edad:', typeof edadUsuario);
// Pregúntate: ¿por qué el tipo no es "number"?
// Respuesta: Porque prompt() siempre devuelve una cadena de texto (string), incluso si el usuario ingresa un número.



// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 
console.log('Resta:', a - b);       // 
// Completa las 3 operaciones que faltan:
// - Multiplicación (usa *)
console.log('Multiplicación:', a * b);     // 
// - División (usa /)
console.log('División:', a / b);         // 
// - Módulo (usa % — devuelve el residuo de la división)
console.log('Módulo:', a % b);           // 


// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí? 

// no se puede sumar un string con un número, pero sí se puede restar un número a un string que representa un número. En este caso,
//  '5' se convierte en 5 y se realiza la resta, dando como resultado 2.

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
// Escribe el mismo saludo usando backticks (`) y ${variable}
// let saludo2 = ...
// console.log(saludo2);
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
// Tu código aquí...
let mensaje = `Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}.`;
console.log(mensaje);