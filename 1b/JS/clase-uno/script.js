//JAVASCRIPT es un lenguaje de programación
//creado para ser ejecutado los navegadores
//y alivianar el trabajo en los servidores

//Javascript es un lenguaje dinámitacimanete tipado
//(o débilmente)
//es basado en prototipos
//es de un solo hilo
//es de alto nivel e interpretado just-in-time.

//las variables son elementos básicos
//de todos los lenguajes de programación
//constan de una declaración, un nombre y un valor

//la palabra reservada let, crea una variable

let nombre = "cuerda"

nombre = 'agua'

nombre = 10

//la palabra reservada const, crea un espacio de memoria constante

const otroNombre = 'Lautaro'

//ERROR: ASSIGNMENT TO CONTAXT VARIABLE
//otroNombre = 10

otroNombre;

//otro tema importante en las variables
//de Js es el scope (ámbito)
//el scope define el rango en el que uan variable
//puede ser usada

//el ámbito global es accesible desde cualquier
//parte del programa y se declaran variables en él
//con la palabra clave DEPRECADA var
// var nombreDos = 'Element'
  
// function showColor(){
//   var color = 'red'
// }


// console.log(color)


///Distintos de valores, algunos son propios 
//del lenguaje y otros son los conocidos como
//PRIMITIVOS


//string == cadena de texto

let string = "texto";
let otroStringValido = 'comillas simples';


//camelCase
//PASCAL_UPPER
//Pascal_Case
//otro_formato_se_llama_slug


//number == números 
//int (enteros) y los float (decimales)
let number = 5;


//boolean
//el boolean puede tomar solamente dos valores
//que son 0 y 1, o su representación humana
//true y false

let boolean = true;
let falseBoolean = false;


let bandera = false;
let numero = 10
let otroNumero = 20
let noEsUnNumero = '10'

/*
 Hay dos tipos de datos
que indican la ausencia de valor,
null y undefined.
*/

//null ---> es una variable de valor nulo
//undefined ---> es una variable que no fue definida


// '=' ---> asigno valor
//'==' y '===' ----> comparo valores

///el operado '===' es de igualdad estricta
//o sea, mismo tipo y valor
Boolean(numero === otroNumero)

///el operador greatherThan
//represante que el miembro de la izquierda
//es mayor que el de la derecha
Boolean(numero > otroNumero)
///el operador lesserThan
//represanta que el miembro de la izquierda
//es menor que el de la derecha
Boolean(numero < otroNumero)
//el operador de igualdad suave
//compara los valores e iguala los tipos
//type-assertion
Boolean(numero == noEsUnNumero)
//en cambio el operador de igualdad estricta
//'===' compara el valor y el tipo
Boolean(numero === noEsUnNumero)

//PROTITOPOS

const respuesta = '25'

parseInt(respuesta) + 1



///////////////
//Vamos a realizar un programa
//que pida al usuario del anvegador
//dos datos, los concatene
//y los devuela

//vamos a usar métodos del objeto Window
//prompt() y alert()

//el método prompt guarda en un string
//la respuesta del usuario

const firstName = prompt("Cuál es tu nombre?")
const lastName = prompt('Cuál es tu apellido?')

alert('Hola, ' + firstName + ' ' +  lastName +', bievenidx!')

//template string literals
const age = prompt(`Hola, ${firstName} ${lastName}, bienvenidx! Cuál es tu edad?`)

const result = alert(`${firstName} ${lastName} tienes ${age} años de edad, y el año próximo tendrás ${parseInt(age) + 1}`)



////Un programa portero de bar



//CONDICIONALES
// son la manera de modificar el flujo
//de ejecución de nuestro programa


//si (condicion === true){
    //orden
//}y sino {
        // otra orden
//}
        
        
const ageOfPerson = prompt('Buenas noches, decíme tu edad')

const parsedAge = parseInt(ageOfPerson)
///el operador >= devuelve true
//si el miembro de la izquierda es 
//mayor o igual al de al derecha
if(parsedAge > 18){
    alert('Puedes entrar')
}else if(parsedAge === 18){
    alert('Justito')
}else{
    alert('No puedes entrar')
}



//incrementar por uno ---> ++
//disminuir por uno ---> --


//NaN ---> not a number
//aparece cuando intentamos operar áritméticamente
//con alguna variable que no es númerica

//con console.log() mostramos información en la consola



//el método alert manda una alerta
//al avegador con el texto que elijamos

