//ARRAYS

//1.Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

//2.Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

//3.Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0,2,4,6,8];

//4.Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


//FUNCIONES
//5.Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1, num2){
    return num1+num2;
}
console.log("Suma: "+suma(2,4));


//6.Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(num1,num2){
    return Math.pow(num1,num2);
}
console.log("Potencia: "+potenciacion(2,4));


//7.Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
let cadena = "Hola mundo";

function separarPalabras(cadena){
    let result = cadena.split(" ");
    return result;
}

console.log(separarPalabras(cadena));


/*8.Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que 
sea el resultado de concatenar el primer string el número dado de veces*/
function repetirString (texto, numero){
    let repetirVeces = "";

    for(let i = 0; i < numero; i++){
        repetirVeces += texto;
    }
    return repetirVeces;
}
console.log(repetirString("Karina",2));


//9.Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numero){
    let respuesta = true;;
    
    if(numero <= 1){
        respuesta = false;
        console.log("El número "+numero+" no es primo");
    }else if(numero == 2){
        respuesta = true;
        console.log("El número "+numero+" es primo");
    }

    for(let i=2; i<numero; i++){ 
        if(numero % i== 0){
        respuesta = false;
        console.log("El número "+numero+" no es primo");
        }
    }
    return respuesta;
}
console.log("Es primo: "+esPrimo(11));

//MEZCLANDO ARRAYS Y FUNCIONES
//10.Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
let array = [14,5,2,7,4,5];

function ordenarArray(array){

    for(let i=0; i<array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                let mayor = array[j];
                array[j] = array[j+1];
                array[j+1] = mayor;
            }
        }
    }
    return array;
}
console.log(" Array ordenado de menor a mayor");
console.log(ordenarArray(array));


//11.Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
array = [14,5,2,7,4,5];

function obtenerPares(array){

    let arrayPosi = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] %2==0){
                arrayPosi.push(array[i]);
            }
    }
    return arrayPosi;
}
console.log(" Array pares");
console.log(obtenerPares(array));


//12.Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
array = [14,5,2,7,4,5];

function pintarArray (array){
    let cadena;
    cadena =array.join(", ");
    return "["+cadena+"]";
}

console.log(pintarArray(array));


//13.Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
array = [14,5,2,7,4,5];

function elementos(x){
    return x * 2;
}
function arrayMapi(array,fun){
    let i = 0;
    let funcionApli = [];

    while(i < array.length){
        funcionApli.push(fun(array[i]));
        i++;
    }
    return funcionApli;
}

console.log(arrayMapi(array,elementos));

//14.Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
array = [4,5,2,7,4,5,1914];

function eliminarDuplicados(array){
    let arraySinDupli = [];
    let sonIguales;
    for(let i = 0; i < array.length; i++){
        sonIguales = false;
        for(let j = 0; j < arraySinDupli.length; j++){
            if(array[i] === arraySinDupli[j]){
                sonIguales = true;
            }
        }
        if(sonIguales === false){
            arraySinDupli.push(array[i])
        }
    }
    return arraySinDupli;
}
console.log(" Array sin duplicados");
console.log(eliminarDuplicados(array));

//Iteraciones 🏰 proyecto 🏰
//ARRAYS

//15.Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];


//16.Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ["Hola","Mundo"];


//17.Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33 , 'tal'];


//18.Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


//FUNCIONES
//19.Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(num1, num2){
    return num1 * num2;
}

console.log("Resultado multiplicación : "+multiplicacion(10,2));

//20.Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(num1, num2){
    if(num2 > 0 ){
        return num1 / num2;
    }else{
        return "No se puede dividir un número entre 0 o inferior";
    }
}
console.log("Resultado división: "+division(10,2));

//21.Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num){
    let par = true;
    num %2==0 ? par = true : par = false;
    return par;
}
if(esPar(9)){
    console.log("El número ingresado es par");
}else{
    console.log("El número ingresado no es par");
}


/*22.Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación 
(todas aceptan 2 números como argumento y devuelve el resultado de su operación)*/

let arrayFunciones = [
    function suma(num1, num2) {return num1 + num2},
    function resta(num1, num2){return num1 - num2},
    function multiplicacion(num1, num2) { return num1  * num2}
];

let num1 = 6, num2 = 2;
let arrayNombres = ["suma: ", "resta: ", "multiplicación: "];
for(let i=0; i<arrayFunciones.length; i++){
    let resultado = arrayFunciones[i](num1,num2);
    console.log(arrayNombres[i] +resultado);
}


//MEZCLANDO ARRAYS Y FUNCIONES
//23.Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
array = [2,3,7,1,3,90,45];

function ordenarArray2(array){
    for(let i = 0; i < array.length; i++){
        for(let  j = 0; j < array.length; j++){
            if(array[j] < array[j+1]){
                let menor = array[j];
                array[j] = array[j+1];
                array[j+1] = menor;
            }
        }
    }
    return array;
}
console.log(" Array ordenado de mayor a menor");
console.log(ordenarArray2(array));

//24.Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
array = [2,4,1,3,8,5,6,6,4,34,45];

function obtenerImpares (array){
    let imparesArray= [];
    for(let i = 0; i < array.length; i++){
        if(array[i] %2!=0){
            imparesArray.push(array[i]);
        }
    }
    return imparesArray;
}
console.log(" Array impares");
console.log(obtenerImpares(array));


//25.Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
array = [2,4,1,3,8,5,6,6,4,34,45];

function sumarArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
console.log( "La suma del array es: ");
console.log(sumarArray(array));


/*26.Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva 
la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24*/

array = [2,4,1,3,8,5];

function multiplicarArray(array){
    let resultadoMulti = 1;
    for(let i = 0; i < array.length; i++){
        resultadoMulti *= array[i]; 
    }
    return resultadoMulti;
}

console.log("El resultado de la multiplicación de todo el array es: "+multiplicarArray(array));
