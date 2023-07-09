/**Enunciado.
 * Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, 
 * sin usar metodos propios del lenguaje, solo estructuras de control.
 * Ejemplos:
 * invertir('Hola') // Devuelve 'aloh' 
 * invertit('Luis') // Devuelve 'siul'
 * invertir('Rojas') // DEvuelve 'sajor'
 * 
 * Como se puede resolver:
 * 1- tener una funcion con un parametro "cadena"
 * 2- crear una vaiable para guardar la cadena invertida 
 * 3- un bucle que recorra el string y guarde los caracteres en la variable  
*/
/** */
//function invertida(cadena){

//    let nuevacadena = ''; //Esta variable vacia soportara la nueva cadena creada
//    for (let i = cadena.length-1; i >= 0; i--){ /*en este for recorreremos mientras i sea mayor o igual a 0 
//                                                  y decrementaremos 1 luego de cada iteraccion.*/
//        nuevacadena += cadena[i];
//    }
//    return nuevacadena;

//}
//console.log("Esta es la cadena invertida: ", invertida("juan pablo"));


// otra manera de realizalo es con el for of que me da los valores de cada letra

function invertida(cadena){

    let nuevacadena = ''; //Esta variable vacia soportara la nueva cadena creada
    for (let letra of cadena){
        nuevacadena = letra + nuevacadena;
    }
    return nuevacadena;

}

//Esta sera la forma de crer el procesos usando los metodos ya incorporados por js
function invertida(cadena){
    return cadena.split('').reverse().join('');
}
console.log("El texto invertido es: ", invertida("juan pablo"));