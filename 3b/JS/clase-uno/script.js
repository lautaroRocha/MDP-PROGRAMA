//JAVASCRIPT es un lenguaje de programación
//creado para ser ejecutado los navegadores
//y alivianar el trabajo en los servidores

//EcmaScript es la convención estándar
//de JS y es en al que se escriben los motores
//de los navegadores
//ES6 - ES5 - ES9

//Javascript es un lenguaje dinámitacimanete y débilmente tipado
/*es basado en prototipos
es de un solo hilo
es de alto nivel e interpretado just-in-time.*/

///las variables son una parte dfundamental
//de cualquier lenguaje de programación

//un espacio en memoria donde guardo un valor asociado a una clave
//en JS 

///declarador nombreDeVariable = valor de variable
  //var ya no se usa
  var deprecada = 'deprecated'
  
//variables que cambian de valor con LET
let variable 
//variables constantes que no queremos que puedan cambiar de valor con CONST
const constante = 18



///el SCOPE o ÄMBITO DE EJECUCIÓN es el espacio en que 'vive' una variable, si usamos VAR una variable vive en el abmiente global y perdemos el control de su valor


//Hay tipos propios de cada lenguaje, y otros comunes a casi todos; esos se llaman PRIMITIVOS

//string ==== texto, cadena de carácteres
        //escapar comillas
let string = "Y dijo 'todo esto será tuyo' "
let otroStringValido = 'comillas simples'
let templateString = `Template String Teclado`

// camelCase
// PascalCase
// PASCAL_UPPER
// format_slug

//number
//hay dos tipos---> int(enteros) y float(decimales)
//a veces también se habla de los BigInt
  let numero = 10
  let diez = '10'
//los numeros se pueden operar aritmeticamente
//console.log( numero + 1 )
//los string se CONCATENAN
//console.log( diez + 1 )
//puedo PARSEAR un dato a otro, por ejemplo parseInt convierte string a enteros
//console.log( parseInt(diez) + 1 )

//boolean
  //es un dato que solo puede tomar uno de dos valores, 1 / 0 === true / false

const boolean = true;
const falseBoolean = false;

let uno = 1
let unoString = '1'
let veinte = 20


//el operador greatherThan devuelve TRUE si el miembro de la izquierrda es MAYOR al de la derecha
Boolean( uno > veinte )
//el operador lesserThan devuelve TRUE si el miembro de la izquierrda es MENOR al de la derecha
Boolean( uno < veinte )
///en JS hay tres usos del '='
//'=' ---> asignar valor
//'==' y '===' ---> comparan valores

//el operaodr '==' es de igualdad suave/débil
//y busca COERSEAR los miembros para que sean del mismo tipo, lo que hace es solo COMPARAR VALOR
Boolean( uno == unoString)
///el operador de igualdad estricta compar TIPO y VALOR
Boolean( uno === unoString)


//null y undefined
  //representan la ausencia de valor y la falta de definición



////PROGRAMA
  //que pida al usuario su nombre y apellido
  //y muestre ambos valores
  //para juntar la información
  //vamos a usar el métodos prompt()
  //y el método alert() para notificar al usuario


const firstName = prompt('¿Cuál es tu nombre?')
const lastName = prompt('¿Cuál es tu apellido?')
//template string literal
const message = `Bienvenido ${firstName} ${lastName}! Me alegra tenerte de vuelta.`

alert( message )



