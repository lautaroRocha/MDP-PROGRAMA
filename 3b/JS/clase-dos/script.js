//ARRAY es una estructura de datos que nos permite crear listas ( o vectores), operar sobre sus valores, recorrerlos y modificarlos.

const frutas = ['manzana', 'banana', 'ciruela']

//length, 
///la propiedad length nos muestra el LARGO de un arreglo
const largoDeFrutas = frutas.length;
//console.log(largoDeFrutas)
   //el índice es la posición en un array de X elemento, accedemos a un índice marcándolo entre llaves. Los índices empiezan en el número 0
//frutas[largoDeFrutas - 1]
//shift, pop
  //con el método SHIFT extraemos el primer valor de un array, modificando el original y pudiendo guardar dicho valor en una variable
//const primerItem = frutas.shift()
//console.log(primerItem)
//console.log(frutas)

//el método POP funciona igual que el SHIFT pero con último elemento en lugar del primero.
//const lastItem = frutas.pop()
//console.log(frutas, lastItem)

//el método UNSHIFT añade un valor que toma como parámetro en el primer índice del arreglo.
frutas.unshift('palta')
//console.log(frutas)

//el método PUSH  añade un valor que toma como parámetro en el último índice del arreglo
frutas.push('mandarina')
frutas.push('palta')
//console.log(frutas)

//indexOf, splice

/// el método indexOf devuelve el índice del PRIMER elemento del array que sea === exactamente igual al valor tomado como parámetro
const indiceDeBanana = frutas.indexOf('banana')
//console.log(frutas, indiceDePalta)

/// el método splice CORTA una sección del array y la devuelve como un nuevo vector. Toma como mínimo dos parámetros, el primero representa el índice en que empieza a cortar, y el segundo la cantidad de elementos que remueve.
console.log(frutas)

const recortados = frutas.splice(indiceDeBanana, 1)

console.log(frutas)

//la ITERACIÓN es un aspecto clave de la informática y consiste en ejecutar un algortimo de manera repetida y controlada
//siempre que trabajemos con bucles e simportante que la condición de salida sea posible de cumplirse, para evitar un STACK OVERFLOW
//for
///el bucle FOR se estructura con tres valores entre parentésis
///el iterador, que iniciamos en 0 ---> el iterador es el contador de vueltas que vamos
///la condición de salida ----> el bucle se seguirá ejecutando mientras se evalúe a TRUE
///la operación de fin de bucle ----> se ejectua cada vez que termina un ciclo
for(let i = 0; i < frutas.length; i++){
    //algoritmo a iterar
      console.log(`me gusta mucho comer ${frutas[i]}`)
    ///....
}
  
  //do..while
  ///el bucle do while ejectua su algoritmo mientra la condición de while sea true. Ejecuta por lo menos UNA vez, ya que corre el proceso ANTES de hacer la comprobación.
  
  let i = 0;
  do {
    console.log('corri: ' + i)
    i++
  } while( i < 0 )
  
  //while
    
  let y = 0  
  //el bucle WHILE es exactamente igual al DO...WHILE, pero hace la comprobación ANTES de ejecutar por primera vez.
  while(y < 2){
      console.log('yo corri: ' + y)
      y++;
  }