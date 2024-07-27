import { validateCapacity, validateAvialability, addNewBooking, viewAllBooking, removeBooking } from "./basicCrud.js";

export const urlRooms = "http://localhost:3000/rooms";
const urlRoomTypes = "http://localhost:3000/roomTypes";
const secondsForViewInformation = 3;

function mostrarData() {
  return Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(urlRoomTypes).then((dataTypesOfRoom) => {
          if (!dataTypesOfRoom.ok) {
            reject(`No se obtuvo la información del endpoint roomTypes ${dataTypesOfRoom.status}`);
          } else {
            resolve(dataTypesOfRoom.json());
          }
        }).catch(error => reject(`Ha ocurrido un error: ${error}`));
      }, 1000 * secondsForViewInformation);
    }), 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(urlRooms).then((dataRooms) => {
          if (!dataRooms.ok) {
            reject(`Ha ocurrido un error obteniendo la información de la base de datos ${dataRooms.status}`);
          } else {
            resolve(dataRooms.json());
          }
        }).catch(error => reject(`Ha ocurrido un error con url rooms ${error}`));
      }, 1000 * secondsForViewInformation);
    })
  ]);
}

function main() {
  mostrarData().then((data) => {
    console.table(data[0]);
    console.table(data[1]);

    let exit = false;
    while (!exit) {
      const userInput = parseInt(prompt(
        "Ingresa la opción que deseas:\n1. Reservar\n2. Ver Reservas\n3. Cancelar Reserva\n4. Salir"
      ));
      
      switch (userInput) {
        case 1:
          let numbreOfHabitation = parseInt(prompt("Ingresa el número de habitación que deseas reservar"));
          let capacity = Number(prompt("Ingresa el número de personas que estarán en la habitación"));
          if ((validateCapacity(data[1], data[0], numbreOfHabitation, capacity)) && validateAvialability(data[1], numbreOfHabitation)) {
            console.log(`Creando reserva`);
            addNewBooking(numbreOfHabitation, capacity);
          }
          break;

        case 2:
          viewAllBooking();
          break;

        case 3:
          let idBooking = parseInt(prompt(`Dime el ID de la reserva que quieres eliminar`));
          removeBooking(idBooking);
          break;

        case 4:
          alert("Gracias, hasta luego.");
          exit = true;
          break;

        default:
          alert("Opción no válida. Intenta nuevamente.");
      }
    }
  }).catch(error => console.error('Error al mostrar los datos:', error));
}

main();