// //los ARRAY son una estrucutra de datos
// //que nos ayuda a formar listas (vectores)
// //operar sobre ellos, modificarlos y recorrerlos
// const frutas = ['manzana', 'banana', 'ciruela', 'sandía']
// // con la propiedad length miramos el LARGO (o sea, la cantidad de items) en un array
// //console.log(frutas, 'su largo es ' + frutas.length)
// // cada item tiene un ÍNDICE, y siempre empezamos a contar desde el 0
// //console.log(frutas[0])
// // el método shift extrae el primer item de un array y lo guarda en una variable (es opcional guardalo)
// const first = frutas.shift()

// //console.log(frutas, 'first is: ' + first)

// ///el método pop extrae el último item de un array, modificando el original y dando la opción de guardarlo en una variable

// const last = frutas.pop()

// //console.log(frutas, 'last is: ' + last)

// ///con el método push del prototipo Array agregamos u valor nuevo al final de la lista
// const otraFruta = 'melón'
// frutas.push(otraFruta)
// frutas.push('banana')
// //console.log(frutas)

// //el método unshift añade un elemento al inicio del array
// const nuevoPrimer = 'palta'
// frutas.unshift(nuevoPrimer)

// //console.log(frutas)

// //el método indexOf nos devuelve el índice del primer elemento coincidente del array
// const indiceDeBanana = frutas.indexOf('banana')

// //console.log(indiceDeBanana)

// //console.log(frutas[indiceDeBanana])

// //el método splice extrae una porción de un arreglo y toma dos parámetros, el primero representa el indice de inicio del recorte, y el segundo la extensión del mismo

// const indiceABorrar = frutas.indexOf('ciruela')
// console.log(frutas)

// let eliminado = frutas.splice(indiceABorrar, 3)

// console.log(frutas, eliminado)



// la ITERACIÓN es ejecutar de manera repetida y controlada un algoritmo. En JS tenemos tres estructuras básicas para hacer BUCLES / LOOPS.

//for 
/////primero declramos un iterador (contador de vueltas)
/////después la condición que mientras sea TRUE va a ejectur el bucle
/////por último, la operación a realizar cada vez que termine un ciclo
//for(let i = 0; i <= 18; i++){
//  console.log(`Voy ${i} vueltas`)
//}


for(let i = 0; i < frutas.length; i=+1){
    console.log(`Voy ${i} vueltas`)
    if(frutas[i] === 'banana'){
      console.log('Mi fruta favorita!!!')
    }
    console.log(`La fruta en la posición ${i} es ${frutas[i]}`)
  }
  
  
  
  //BUCLE DO WHILE
  
  //este bucle ejectura como mínimo una vez su algoritmo, después de la cual revisa una condición pasada entre parentésis a la orden 'while', si se evalúa a TRUE, seguirá corriendo hasta que de FALSE
  
  /*
  let i = 0;
  
  do {
     i += 2;
     console.log(i);
   } while (i < 2000);
  */
  //
  
  //el bucle WHILE ejecuta su algoritmo mientras la condición que recibe entre parentésis sea verdadera, y realiza la comprobación ANTES de correr por primera vez
  /*
  let i = 0;
  let noAceptado =  true;
  
  while(noAceptado){
    i++;
    if(i === 15){
      noAceptado = false;
    }
    console.log(i)
  }
  */

const movies = [];

for(let i=0; movies.length < 4; i++){
    const newMovie = prompt('Recomendáme una película')
    movies.push(newMovie)
    alert(`Hasta ahora me recomendaste ${movies.length} pelis`)
}

do{
    const movieToRemove = prompt(`Entre ${movies} tengo que eliminar una, ¿cuál elimino?`)
    const indexToRemove = movies.indexOf(movieToRemove)
    
    if( indexToRemove === -1){
        alert('No sé de qué película me hablas')
    }else{
        movies.splice(indexToRemove, 1)
        alert(`Gracias! Ahora me quedé con ${movies}`)
    }
}while(movies.length !== 3)