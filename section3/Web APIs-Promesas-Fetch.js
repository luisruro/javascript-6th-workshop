


// function userInterval() {
//     return new Promise((resolve, reject) => {
//         const userInterval = Number(prompt('Ingresa los segundos en los que quieres que se ejecute la acción'))
//         if (userInterval === isNaN || userInterval < 0) {
//             alert("por favor, ingresa un número válido");
//         } else {
//             const time = userInterval * 1000;
//             setTimeout(async () => {
//                 try {
//                     url = await fetch("https://jsonplaceholder.typicode.com/posts");
//                     const data = await url.json();
//                     console.log("Datos cargados: ", data);
//                 } catch (error) {
//                     console.error(error.message);
//                 }
//                 resolve(`El mensaje se muestra despues de ${userInterval} segundos`);
//             }, time);
//         }
//     });
// }

// async function main() {
//     try {
//         userInterval()
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// main();

//Otra forma de llamar la API con promesas

// URL de la API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// Función para llamar a una API y manejar la respuesta con promesas
function fetchApiData(url) {
    // Utilizamos fetch para hacer la solicitud y no necesitamos escribir new Promise ya que fetch ya devuelve una promesa, no hay necesidad de envolverlo en otra promesa
    return fetch(url)
        .then(response => {
            // Verificamos si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Convertimos la respuesta a JSON
            return response.json();
        })
        .then(data => {
            // Manejo de datos exitoso
            console.log('Datos recibidos:', data);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error al cargar los datos:', error);
        });
}

// Llamamos a la función con la URL de la API
fetchApiData(apiUrl);

// //Así sería incorporando el new Promise
// function llamarApi (url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) =>{
//                 if (!response.ok) {
//                     reject(new Error(`HTTP error! Status: ${response.status}`));
//                 }
//                 return response.json();
//         })
//         .then((data) => {
//             resolve(data);
//         })
//         .catch((error) => {
//             reject(error);
//         });
//     });
// }

// llamarApi(apiUrl)
// .then((response) => {
//     console.log('Datos recibidos:', response);
// })
//  .catch((error) => {
//     console.error('Error al cargar los datos:', error);
// });


