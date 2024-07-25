function manejarAsincronia(callback, promesa) {
    return new Promise((resolve, reject) => {
        //reject(new Error('Promesa no cumplida'))
        setTimeout(() => {
            resolve('Promesa cumplida');
        }, 2000);
    });
}

manejarAsincronia()
  .then((response) => {
    console.log(response)
})
  .catch((err) => {
    console.log(err.message)
})

//¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
/*Envía un mensaje de error ya que el reject se ejecuta inmediatamente y la promesa debe esperar un tiempo para que se resuelva*/

//¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
/*Si puede manejar adecuadamente tanto los resultados exitosos como los errores que puedan ocurrir */

let callback = () => {
    return("y callback ejecutado!");
};

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa cumplida');
    }, 1000)
})

function manejarAsincroniaDos (promesa, callback) {
promesa.then((response) => {
    console.log(response);
    setTimeout(() => {
      console.log(callback());
    }, 1500)
}).catch((error) => {
  console.log(error.message)
  callback(error)
})
}

manejarAsincroniaDos(promesa, callback)

