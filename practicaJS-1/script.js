//condicionales

//if..else ---> una cosa, y todo lo que no es esa cosa
//if...else if...*n..else ---> una cosa, o la otra, o todo lo que es ninguna de esas

//el switch res otra estructura condicional
//en la que analizamos posibles casos
//de una variable

let fruta = 'BANANA'


///distinguir entre mayus y minus es ser CASE_SENSITIVE
//así como con parseInt() transformamos
//un string en un numero, todos los datos string
//pueden acceder a los métodos de su tipo.
//el método toLowerCase() transforma un string
//en minúsucula, su contrario sería toUpperCase()

switch(fruta.toLowerCase()){
  case 'manzana':
    console.log('La manzana es roja')
    //es importante usar la orden 'break' para
    //terminar la ejecución del switch al momento
    //de cumplirse un caso
    break;
  case 'banana':
    console.log('La banana es amarilla')
    break;
  case 'sandía':
    console.log('la sandía es verde')
    break;   
  case undefined:
    console.log('Elegí una fruta')
    break;
  default:
      console.log('No conozco esa fruta')
      break;
}








/*
Desarrollá un programa
que solicite al usuario
su nombre y su edad.
  Una vez ingresada la edad,
el programa debe mostrar en un mensaje
  - Saludo al usuario
  - Edad actual
  - Año de nacimiento
*/

let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")
let edadParseada = parseInt(edad)
let añoActual = 2023

if( typeof edadParseada === 'NaN' ){
    alert("ingrese el año correctamente")
}else{
    let añoNacimiento = añoActual - edadParseada
    alert("Tu año de nacimiento es " + añoNacimiento)
}

/*
Desarrollá un programa que pida un número de 1 al 100
y diga si el número es PAR o IMPAR. Si el número ingresado
está por fuera del rango / no es válido
deberá salir un mensaje de error
*/

let numeroDado = 200;


if( numeroDado >= 1 && numeroDado <= 100 ){
    if(numeroDado % 2 === 0){
      console.log('es par')
    }else{
      console.log('es impar')
    }
}else{
  console.log('El número no es válido')
}



/*
Desarrollá un programa verdulero
que reciba una de las siguientes frutas,
y devuelva su precio
    Manzanas - $375.00 por kilo
    Plátanos - $125.00 por kilo
    Zanahorias - $187.50 por kilo
    Naranjas - $200.00 por kilo
    Espinacas - $300.00 por kilo
    Uvas - $500.00 por kilo
    Tomates - $250.00 por kilo
    Pepinos - $150.00 por kilo
    Lechuga - $375.00 por kilo
    Fresas - $625.00 por kilo
    Brócoli - $450.00 por kilo
    Piñas - $625.00 por kilo
    Pimientos - $300.00 por kilo
    Sandías - $1,000.00 por kilo
    Calabacines - $225.00 por kilo
*/
