/**Enunciado 5.
 * ¿Cuanto es el x% de x numero?
 * 
 * Ejemplo:
 * 20% de 100: Devuelve 20
 * 43% de 897: Devuelve 385.71
 * 
 * Como lo haria?
 * 1- Crearia una funcion a la que le pasaria 2 parametros 1 el porcentaje a calcular el otro parametro el valor base sobre el que se calculara el porcentaje.
 * 2- Creamos una variable que guarde el calculo de porcentaje de las variables ingresadas
 * 3- Devolvemos un strig con la solucion 
 */

function porcentaje(porcien, numero){
    let resultado= ((porcien*numero)/100);
    return resultado;
}
console.log(`El porcentaje es: ${porcentaje(19,119)}`);