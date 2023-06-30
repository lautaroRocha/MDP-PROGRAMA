//functions (params, return. anonymus-arrow)

//una función es un conjunto de instrucciones
//que dejamos asociadas a una clave y podemos invocar en
//cualquier momento (mientras estemos dentro de su scope/ámbito)
///en vex de escribir las instrucciones en el scope global de mi programa, es mejor guardarlas en funciones que sean controlables y reutilizables

let cualquiera = 'cualquiera'

///una funcion se declara con la palabra clave function, el nombre de la funcion, unos parentesis (), y unas llaves {} que marcan su scope. las funciones no son ejectuadas cuando se declaran, sino solamente cuando se invocan.
function mostrarMensaje(){
  //una funcion tiene su propio scope
  //por lo que puede redeclarar
  //variables del ambito global o acceder a ellas
  let cualquiera = 'otro valor'
  function otra(){
    console.log(cualquiera)
  }
  otra()
}

//mostrarMensaje()
//console.log(cualquiera)

///las funciones pueden recibir parametros, que podemos nombrar de cualquier manera en su decalración y completar al invocarlas.

function sumarDosNumeros( 
  //las parentesis son el lugar de
  //la función que puede tomar los PARAMETROS
  n1, n2){
  //si quiero almacenar el resultado de una
  //funcion en una variable, lo hago con la 
  //palabra clave return
  //return también CORTA la función
  
  //uso del return para manejo de errores
  if(n1 === undefined || n2 === undefined){
      return 'no se puede, pasa por favor dos numeros enteros'
  }  
  return n1 + n2
  //este código es inalcanzable, porque
  //está después de un return en su mismo scope
  console.log('unreacheble')
}


const resultadoUno = sumarDosNumeros(1, 2);

///estas son las funciones flechas, una adición a JS que nos da 
///una sintaxis más cómoda para la declaración de funciones
///si está en uan sola línea, tiene un return implicito
const funcionFlecha = ( num ) => {
  return num + 1
} 

const funcionFlechaReturnImplicito = num => num + 1

const resultado = funcionFlecha(5)

const resultadoUnaLinea = funcionFlechaReturnImplicito(7)


//objects
///un objeto es una ESTRUCTURA DE DATOS que forma una lista con claves
const objeto = {
  ///la clave la podemos escribir como un nombre o con comillas
  //el valor siempre tiene que ser un tipo o una estructura de datos
  //los valores de un objeto se llaman propiedades cuando representan justamente valores
  clave : 'valor', 
  otraClave : [1 , 2, 3],
  //y metodos cuando representan funciones
  otroValor : () => {},
  hijo : {
    nombre : 'Nombre de Hijo',
    amigo : {
      nombre : 'Nombre de Amigo',
      edad : 15
    }
  }
}
  //JS objects are dynamic
//los objetos en JS son dinámicos y puedo cambiar el valor de sus calves en cualquier momento
 ///objeto.clave = 'nuevoValor'
//además, si asigno valor a una clave inexistente, CREO esa clave en el objeto
  ///objeto.trabajo = 'albañil'

   ///console.log(objeto)

//let queQuieroSaber = 'edad'
  //dot notation / bracket notation
  //dot ---> static
/// que la dot notation sea estática significa que le tengo que pasar
//el nombre de las claves 
    ///  ----> esto no es válido porque no es el nombre de la clave objeto."hijo"
 // objeto.hijo.amigo.edad

  //bracket ---> dynamic
    //la bracket notation es DINAMICA, o sea que puedo pasar una expresion que se evalúa para encontrar una clave igual
 // let numero = 1
  //usamos un operador ternario para hacer un condicional dentro de unas brackets
 // objeto.hijo["amigo"][numero > 3 ? 'edad' : 'nombre']


//class - instanciate classes

//this es la BINDING WORD de javascript

class Persona {
  constructor(nombre, edad){
    this.nombre = nombre,
    this.edad = edad
  }
  saludar(){
    console.log(`Hola! Soy ${this.nombre}`)
  }
}


//new es la palabra clave para instanciar una clase accediendo a su contractor
const persona = new Persona('Lautaro', 25)
const otraPersona = new Persona('Raúl', 45)
const otraPersonaMas = new Persona('José', 15)

persona.saludar()
otraPersona.saludar()
otraPersonaMas.saludar()


const personaDeFuncion = createPerson('Lautaro', 25)

const createPerson = (nombre, edad) => {
  let persona = {}
  persona.nombre = nombre;
  persona.edad = edad;
  persona.saludar = () => {
    console.log(`Hola, soy ${nombre}`)
  }
  return persona
}

personaDeFuncion.saludar()
