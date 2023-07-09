/**Ejercicio 3.
 * Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
 * la frase y la palabra deben ser parametros de una funcion
 
 * Ejemplos:
 * coincidencias ("Hola soy una palabra en una frase, PALABRA. ", "palabra"); Devuelve 2
 * coincidencias ("soy la frace", "victor") devuelve 0
 
 
 * Como se haria:
 * Funcion con dos parametros parametro 1 la frase, parametro 2 la palabra clave a buscar.
 * poner strings en minusculas y limpiarlo
 * comprobar si la busqueda esta incluida en la frase
 * crear un array de palabras de la frase 
 * mapear esas palabras y hacer un contador de cada una
 * devolver el contador de la busqueda 

function frase(f){
    let textof=f
            .split(' ')
            ;
    let busqueda=
return textof;
}
console.log(frase("Palabras en el texto"))

 */

function coincidencias(frase, busqueda){
    let texto_limpio = frase
                       .toLowerCase()
                       .replace(/[',''!''¡''¿''?''-''.']/gi, "") //Se pueden separar por comas o entre parentesisi los argumentos que queremos remplazar
                       //.replace(/[(,)(!)(¡)(¿)(?)(-)(.)]/gi, "")
                       ;
    let resultado = 0;

    if (texto_limpio.includes(busqueda)){ 
        let palabras = texto_limpio.split(" ");
        let mapeo = {};
        for (let palabra of palabras){
            if (mapeo[palabra]){
                mapeo[palabra]++;
            }else{
                mapeo[palabra] = 1;
            }
        }
        resultado = mapeo[busqueda];
        //console.log(palabras); //ver respuesta en consola para provar el ejercicio
        //console.log(mapeo); //ver respuesta en consola para provar el ejercicio
    }else{
        resultado = 0;
    }
    return resultado;
}
console.log(
    "cantidad de conicidencias en la frase: ",
    coincidencias('!Hola, que tal, Soy Luis, Luis, Luis Rojas¡', 'luis'),// este resultado mostrara que luis esta 3 veces en la frase
    coincidencias('!Hola, mundo¡', 'luis') //si la palabra a buscar no existe muestra cero
    );