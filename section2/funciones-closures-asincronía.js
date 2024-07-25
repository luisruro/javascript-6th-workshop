function crearSumador(numero){
    let sumador = numero;
    return function (numer2) {
        return sumador += numer2;
    }
}

const sumarSiete = crearSumador(7);

const sumarDos = crearSumador(2);

console.log(sumarSiete(2));
console.log(sumarDos(4));

// ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
/*Porque las funciones y variables internas pueden acceder a las variables externas entonces al ejecutarlas pueden acceder 
desde el interior al exterior, por eso cuando las llamamos desde adentro se crea un entorno de ejecución*/

// ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
/*la implicaciones pueden ser significativas especialmente si se crean muchas instancias de funciones con closures ya que la memoria es como un cuarto y
los closures funcionan como una mochila que guarda juguetes que serian las variables que hay dentro del closure y si lleno el cuarto con muchas mochilas llenas de juguetes
no habrá espacio en el cuarto para moverse es decir que la computadora utilizara mucha memoria y será lenta por eso es importante no guardas variables innecesarias en los closures
*/