//FUNCIONES Y OBJETOS EN JS

//functions (params, return. anonymus-arrow)
   //una función es un conjunto de instrucciones
//que dejamos asociadas a una clave y podemos invocar em
//cualquier momento (mientras estemos dentro de su scope/ámbito)

function miPrimeraFuncion(){
    console.log('Esta es mi primera función')
  }
  
  //cuando declaramos una función, podemos nombrar parámetros entre las parentésis y usarlos en el algoritmo
  
  ///(en este ejemplo hacemos un condicional en una sola línea con un operador ternario)
  function miSegundaFuncion(ocasion){
    console.log(`Esta es mi ${ocasion 
                //? ocasion : "primera"
                } función`)
  }
  
  function sumaDeDosEnteros(a, b){
    return a + b
  }
  
  function porcentageOf(a , b){
    return a * b / 100
  }
  
  //las funciones de flecha son una forma más práctica de declarar funciones. Asociamos una constante a una funcion anonima ( ()=>{} ) y luego la invocamos como a cualquier otra. también puede tomar parámetros.
  const funcionFlecha = () => {
    
  
    console.log('Por ahora solo un console log')
  }
  
  //invocar función
  miPrimeraFuncion()
  
  miSegundaFuncion('segunda')
  
  porcentageOf(100, 25)
  
  let result = sumaDeDosEnteros(5, 3)
  
  funcionFlecha()

  //objects
///los objetos son una estructura de datos muy usado en JS
//de hecho, por su sistema de prototipado
///TODO ES UN OBJETO EN JAVASCRIPT

///los 'objetos literales' son las declaraciones que armamos a medida en nuestro código


const objetoJS = {
    clave : 'valor', 
    //estas son propiedades
    lang : 'JS',
    kind :  'literal',
    array : [1, 2, 3],
    mutable : true,
    son: {
      friend : 'John',
      pet : 'cat',
      skills : {
        painting : 5,
        drawing : 6,
        sport : 8
      }
    },
    //esto es un método
    sayHi : () => {
      console.log("I'm a JS object")
    }
  }
  
  
  //dot/bracket notation
  // con la DOT NOTATION puedo acceder a las propiedas/metodos y concatenarlos.
  objetoJS.son.skills.sport
  
  // con la BRACKET NOTATION hacemos lo mismo, pero podemos pasar valores y no los nombres de las propiedas como si fueran variables
  objetoJS.son.skills['sport']
  
  //constructors based on class
    ///una clase es una plantilla para un objeto. la declaramos con la palabra clave class e INSTANCIAMOS ( o sea, hacemos objetos de esa clase). Esto sucede a tráves de su método constructor
  
  
  //this es una BINDING WORD que vincula con la instancia actual del objeto
  
  class Persona {
     constructor(nombre, profesion) {
      this.nombre = nombre;
      this.profesion = profesion;
    }
     sayHi() {
      console.log('Hola, soy ' + this.nombre + " y soy " + this.profesion)
    }
  }
  
  const personaConstruida = new Persona('Raúl', 'albañil')
  
  const otraPersona = new Persona('José', 'carpintero')
  
  console.log(personaConstruida.nombre)
  
  personaConstruida.sayHi()
  otraPersona.sayHi()
  
  
  const personaUno = {
    nombre : 'Raúl',
    edad : 35,
    celular : 45616
  }
  
  const personaDos = {
    nombre : 'javier',
    edad : 15,
    celular : 4687465
  }
  
  const personaTres = {
    nombre : 'Ramón',
    edad : 50,
    celular : 56467897
  }
  
  /*
  console.log(personaTres.nombre)
  personaTres.nombre = 'Julián'
  console.log(personaTres)
  */
  
  function crearContacto(nombre, apellido, numero){
    let contacto = {};
      contacto.nombre = nombre;
      contacto.apellido = apellido,
      contacto.numero = numero;
    return contacto
  }
  
  
  const primerContacto = crearContacto('Julián', 'Olmo', 4564)
  
  console.log(primerContacto)