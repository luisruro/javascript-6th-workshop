// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

// console.log("Fuera de la función:", globalVariable);
// testScope();

function test() {
    let userInteraction = prompt('¿es posible acceder a una variable global en diferentes partes del código: SI/NO?');
    if (userInteraction.toLowerCase() === 'si') {
        console.log(`Correcto!! Una variable global podemos llamarla en cualquier lugar de nuestro código, 
            algunas veces creamos variable globales sin darnos cuenta y es cuando NO utilizamos var, let o const.`);
    } else {
        console.log(`Incorrecto!! Recuerda que una variable global podemos llamarla en cualquier lugar de nuestro código, algunas 
            veces creamos variable globales sin darnos cuenta y es cuando NO utilizamos var, let o const.`);
    }

    let userInteraction2 = prompt('¿es posible acceder a una variable local en diferentes partes del código: SI/NO?');
    if (userInteraction2.toLowerCase() === 'si') {
        console.error(`Correcto!! La variable local únicamente va a vivir dentro de la función, fuera de ella la variable no está definida.
            En funciones que retornan funciones, podemos llamar a variables exteriores desde funciones que están anidadas, 
            pero desde las funciones externas no vamos a poder acceder a variables internas de funciones anidadas.`);
    } else {
        console.error(`Incorrecto!! Recuerda que la variable local únicamente va a vivir dentro de la función, fuera de ella la variable no está definida.
            En funciones que retornan funciones, podemos llamar a variables exteriores desde funciones que están anidadas, 
            pero desde las funciones externas no vamos a poder acceder a variables internas de funciones anidadas.`);
    }

    let userInteraction3 = prompt('¿es posible acceder a una variable de boque en diferentes partes del código: SI/NO?');
    if (userInteraction3.toLowerCase() === 'si') {
        console.log(`Correcto!!  las variables solo van a vivir dentro del bloque de código ( **{dentro de llaves es un bloque} **)
            donde se crean.`);
    } else {
        console.error(`Incorrecto!! Recuerda que las variables solo van a vivir dentro del bloque de código ( **{dentro de llaves es un bloque} **)
            donde se crean.`);
    }
}

// test();

//HOISTING

// vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

function testHoisting() {
    let user1 = prompt(`Cual es el resultado de esta operación: 
        console.log(a);
        var a = 1;`);
    if(user1.toLowerCase() === 'undefined') {
        console.log(`Correcto!! las variables declaradas con var son inicializadas con undefined`);
    } else {
        console.error(`Incorrecto!! Recuerda que las variables declaradas con var son inicializadas con undefined`);
    }

    let user2 = prompt(`Puedo acceder a estas variables antes de su declaración: 
        console.log(b);
        console.log(c);
        let b = 2;
        const c = 3;`);
    if(user2.toLowerCase() === 'no') {
        console.log(`Correcto!! las variables con let y const no pueden ser accedidas antes de su declaración`);
    } else {
        console.error(`Incorrecto!! Recuerda que las variables con let y const no pueden ser accedidas antes de su declaración`);
    }

    let user3 = prompt(`Puedo llamar una función declarada antes de ser declarada así: 
        funcionDeclarada();
        function funcionDeclarada() {
        return "Función declarada ha sido llamada.";
        }`);
    if(user3.toLowerCase() === 'si') {
        console.log(`Correcto!! estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.`);
    } else {
        console.error(`Incorrecto!! Recuerda que estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.`);
    }

    let user4 = prompt(`Puedo llamar una función expresada antes de ser declarada así: 
        funcionExpresada();
        const funcionExpresada = function () {
        return "Función expresada ha sido llamada.";
        };`);
    if(user4.toLowerCase() === 'no') {
        console.log(`Correcto!! No puedes invocar funciones expresadas antes de su declaración, ya que estas no se elevan como las funciones declaradas.`);
    } else {
        console.error(`Incorrecto!! Recuerda que no puedes invocar funciones expresadas antes de su declaración, ya que estas no se elevan como las funciones declaradas.`);
    }
}

// testHoisting()