// FUNCIONES JS

//console.log('Comprobar vículo con html')


// 1.Funciones
// 1- Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
/*
function resta(a, b) {
    a = prompt("Introduce el 1º número.")
    b = prompt("Introduce el 2º número.")
    a = +a
    b = +b
    return a - b;
}
console.log(resta())
*/
// //console.log(resta)

// // 2- Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// //Nota: Debes de usar el Switch.
// //    0 - 4: Insuficiente.
// //    5 - 6: Suficiente.
// //    7 - 8: Notable.
// //    9 - 10: Sobresaliente.

//He hecho el ejercicio de 3 maneras:

//Con intervalos BOOLEANOS

function calcularNota() {
    nota = prompt("Introduce una nota")
    nota = +nota
    switch (true) {
        case nota >= 0 && nota <= 4:
            resultado = "Insuficiente";
            break;
        case nota > 5:
            resultado = "Suficiente";
            break;
        case nota < 5:
            resultado = "Notable";
            break;
        case nota > 5:
            resultado = "Sobresaliente";
            break;
        default:
            resultado = "def";
            break;
    }
    return resultado
}
console.log(calcularNota())

//Con intervalos "en cascada" - Paco's Tip

function calcularNota() {
    nota = prompt("Introduce una nota")
    nota = +nota
    switch (true) {
        case nota <= 4:
            resultado = "Insuficiente";
            break;
        case nota <= 6:
            resultado = "Suficiente";
            break;
        case nota <= 8:
            resultado = "Notable";
            break;
        case nota <= 10:
            resultado = "Sobresaliente";
            break;
        default:
            resultado = "def";
            break;
    }
    return resultado
}
console.log(calcularNota())


//Ahora usando valores absolutos

function clasificacion() {
    nota = prompt("Introduce una nota")
    switch (+nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            resultado = "Insuficiente";
            break;
        case 5:
        case 6:
            resultado = "Suficiente";
            break;
        case 7:
        case 8:
            resultado = "Notable";
            break;
        case 9:
        case 10:
            resultado = "Sobresaliente";
            break;

        default:
            resultado = "def";
            break;

    }
    return alert(resultado)
}

//console.log(clasificacion())

// // 3- Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’


// // 4- Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

// // 5- Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

// // 6- Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'


// // 7- Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

// // 8- Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// // Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

// // 9- Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

// // 10- Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

// 11- Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.