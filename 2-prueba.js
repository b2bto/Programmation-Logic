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
    let invertido = texto.split('');
    console.log(invertido)
}
palindromo("otto");




