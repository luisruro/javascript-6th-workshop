// console.log("Inicio del script");

// setTimeout(() => {
//   console.log("Primer setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("Segundo setTimeout");
// }, 0);

// Promise.resolve("Promesa resuelta").then(console.log);

// console.log("Fin del script");

// Función para pedir la predicción y mostrar resultados
function preguntarPrediccion() {
    // Preguntar al usuario su predicción
    const pregunta = prompt(`Mira el código y pon los número en el orden el cuál crees que aparecerán los mensajes en consola
        1. console.log("Inicio del script");
        2. setTimeout(() => {
             console.log("Primer setTimeout");
            }, 0);
        3. setTimeout(() => {
             console.log("Segundo setTimeout");
            }, 0);
        4. Promise.resolve("Promesa resuelta").then(console.log);
        5. console.log("Fin del script");
        `);

    // Convertir la respuesta del usuario en un array limpio
    let predicciones = pregunta.split(",").map(item => item.trim());

    // Orden real de los mensajes
    let ordenReal = [
        "1",
        "5",
        "4",
        "2",
        "3"
    ];

    // Comparar la predicción del usuario con el orden real
    let aciertos = 0;
    let errores = [];

    for (let i = 0; i < ordenReal.length; i++) {
        if (predicciones[i] === ordenReal[i]) {
            aciertos++;
        } else {
            errores.push({
                paso: i + 1,
                predicción: predicciones[i],
                real: ordenReal[i]
            });
        }
    }

    // Mostrar resultados al usuario
    if (aciertos === ordenReal.length) {
        console.log("¡Felicidades! Has acertado el orden en que se muestran los mensajes.");
    } else if (errores.length === 1) {
        console.log("Has cometido un error en el paso:");
        console.log(`- Predijiste '${errores[0].predicción}', pero debería ser '${errores[0].real}'.`);
    } else {
        console.log("Has cometido errores en los siguientes pasos:");
        for (let error of errores) {
            console.log(`- Paso ${error.paso}: Predijiste '${error.predicción}', pero debería ser '${error.real}'.`);
        }
    }
}

// Llamar a la función para pedir la predicción al usuario
preguntarPrediccion();

