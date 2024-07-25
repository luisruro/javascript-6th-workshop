console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  //Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  // ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
  /*La función declarada funcionó sin problemas, por el otro lado la función expresada no se ejecuto y se presento un error*/
  // ¿Cómo difieren los resultados entre la función declarada y la función expresada?
  /*El hoisting juega un papel fundamental ya que las funciones declaradas se elevan y las expresadas no es por eso que no permiten ser llamadas
  antes de que sean definidas en el código, además de que las funciones expresadas pueden ser anónimas o nombradas*/
  // ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
  /*Básicamente es como las funciones declaradas y expresadas manejan la flexibilidad, ya que las funciones declaradas ofrecen una forma clara y consistente de definir funciones
  disponibles en todo el ámbito y las expresadas son comunmente utilizadas como callbacks o funciones anidadas*/