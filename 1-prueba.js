/*Enunciados logica de programacion

1. Dado un numero devolver su tabla de multiplicar completa.

para solucionar este primer proceso, pensariamos en una funcion la cual tomaria el numero ingresado y procederia a realizar la multiplicacino n veces para posteriormente mostrarla por consola.

Ejecutar esta funcion:
tabla_multiplicar(n)

regresa un resultado similar a:
Tabla del (n):

1*2=2
2*2=4
3*2=6
4*2=8
5*2=10
6*2=12
7*2=14
8*2=16
9*2=18
Como hacerlo?
- crear una funcion con parametro "numero" 
- Variable con texto encabezado
- Bucle del 1 al 10
concatenar la variable string con la multiplicacion y el resultado
*/

function tabla_multiplicar(n){
//    let resultado = "# Tabla del "+n+"#"; esta es una manera de concatenar 
    let resultado = `# Tabla del ${n} \n`; //esta es una manera de concatenar

    for (let i = 1; i<=10; i++){ // primero se compara i con 1 y se dice que si i en menor o igual a 10 se debera sumar 1 a i.
        let multiplicar = (i*n); // en esta parte se multiplicara el numero que tenemos en i por el numero ingresado en n.
        resultado += `${i} x ${n} = ${multiplicar}\n` // en esta parte concatenaremos el string con el numero que tenemos en i con el nmero que ingresamos en n y con el resultado.
    }
    return resultado; // en esta parte retornare el resultado 
      
}
console.log(tabla_multiplicar(3)); // aqui mostraremos el resultado de la funcion que se debera ver asi: # Tabla del 3 1 x 3 = 3 2 x 3 = 6 3 x 3 = 9 4 x 3 = 12 5 x 3 = 15 6 x 3 = 18 7 x 3 = 21 8 x 3 = 24 9 x 3 = 27 10 x 3 = 30


