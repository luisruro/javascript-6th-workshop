console.log('Mensaje 1: Inmediatamente');
setTimeout(() => {
    console.log('Mensaje 2: Con timeout de 0 segundos');
}, 0);

setTimeout(() => {
    console.log('Mensaje 3: Con timeout de 1 segundo');
}, 1000);

/*¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?

Es debido a la naturaleza del event loop en JavaScript, entonces primero se ejecuta lo sincrono, luego las microtareas y por último las macrotareas.

¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

A pesar de que JavaScript es un lenguaje monohilo, el event loop es un mecanismo que le permite realizar operaciones asíncronas y no bloqueantes, entonces las tareas se encolan para su ejecución 
después de que se completa el código sincrónico actual.

Las macrotareas se ejecutan una vez que el call stack está vacío. Ejemplos setTimeout y setInterval, en el ejemplo setTimeout crea macrotareas que se encolan para su ejecución después de que el
código sincrónico ha terminado.
Las microtareas tienen prioridad sobre las macrotareas y se ejecutan inmediatamente después que el call stack está vacío pero antes de que se ejecuten las macrotareas,
ejemplo de microtareas son las promesas. 

El manejo de operaciones asíncronas funciona por ejemplo cuando se ejecuta código sincrónico, todas las operaciones se colocan en el call stack y se ejecutan una tras otra, 
sin embargo las operaciones asíncronas como setTimeout se colocan en la cola de macrotareas para su ejecución esperando que el código sincrónico sea ejecutado, es por eso que apesar de que 
el setTimeout es de 0 segundos, la función callback no se ejecutará hasta que el call stack esté vacío.
*/