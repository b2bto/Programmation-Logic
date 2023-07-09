/**Ejercicio de palindromo Palindromo son aquellas palabras que se leen igual al invertirlas por ejemplo ana, bob, otto, allivessevilla 
 * no tener en cuenta espacios o simbolos extraños
 * ejemplos: ejecuto esta funcion:
 * palindromo ("otto") // Devuelve: True
 * palindromo ("Victor") // Devuelve: False
 * 
 * Como Hacerlo: 
 * Funcion con parametro "texto"
 * Separar el texto en un array de letras
 * Darle la vuelta
 * unir el array de letras en un string y comparar con el parametro
 * 
*/

function palindromo(texto){
    let invertido = texto
                    .split('') // primero separamos el array por letras esto hace la funcion .split()
                    .reverse() // revierte o le da la vuelta al array. 
                    .join('') // Une nuevamente en un solo texto el array.
                    ; 
    if (invertido === texto ){ // el triple igual ayuda acomparar que sea el mismo dato y tipo de dato 
        return true;
    }else{
        return false;
    }
}
console.log('¿Es un palindromo? '+ palindromo('otto'));



