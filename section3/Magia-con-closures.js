function contador() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}

let increment = contador();

// console.log(increment());
// console.log(increment());
// console.log(increment());


    let continuar = true;
  
    while (continuar) {
      let opcion = prompt(`El valor actual del contador es: ${increment()}. ¿Deseas incrementarlo? (si/salir)`);
  
      if (opcion === "si") {
        contador();
      } else if (opcion === "salir" || opcion === null) {
        continuar = false;
      } else {
        // Opción inválida, no hacemos nada y continuamos el bucle
        alert("Opción inválida. Por favor, ingresa 'Sí' para incrementar, 'No' para mantener el valor actual, o 'Salir' para terminar.");
      }
    }
  
    alert(`Finalizando. El valor final del contador es: ${increment()}.`);

