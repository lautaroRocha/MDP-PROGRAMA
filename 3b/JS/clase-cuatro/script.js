//el DOM (Document Object Model)es una representación en árbol de nodos
//del documento HTML. La DOM API del navegador
//nos ofrece varios metodos para acceder y modificar 
//dichos nodos.

//modos de acceso
//getElementsByTagName, getElementsByClassName. byName


///el metodo getElementByTaGName devuelve un arreglo de todos los elementos del DOM que matchean su etiqueta con el parámetro

//buggy
const buttons = document.getElementsByTagName('main')
const buttonClassButtons = document.getElementsByClassName('btn')

//getElementById
const addButton = document.getElementById('add-btn')


//querySelector, querySelectorAll ===> devuelve un array de nodos
    //por id
    //por clase
    //por nombre de tag
    //para guardar un nodo de DOM en una variable,
    //la iniciamos y le damos el valor de document.metodoDeAcceso

    //querySelector toma como parametro un selector en la sintaxis de CSS
const openButton = document.querySelector('#open-btn')
const removeButton = document.querySelector('#rmv-btn')
const popUp = document.querySelector(".pop-up")
const main = document.querySelector('main')


//createElement es un método de la interfaz document
//que permite crear nodos de DOM que son almacenados en memoria
//toma como parametro un tagname (html)

const newInput = document.createElement('input')
const newParagraph = document.createElement('p')

//appendChild() es un método de los NODOS del DOM
//que nos permite añadir como hijo suyo un elemento

// main.appendChild(newInput)


///textContent, innerHTML, 
//innerText
    newParagraph.textContent = 'Este parráfo lo creé con JS'
  //newParagraph.textContent = '<button>BOTÖN</button>'
//inner HTML agrega como hijo unnodo creado a partir de un string describiendo HTML
 ///  newParagraph.innerHTML = '<button>BOTÖN</button>'


// main.appendChild(newParagraph)


//setAttribute() es un método de los nodos del DOM
//que me permite setear atributos a las etiquetas html.
//toma dos parámetros: el nombre del attr, y el valor

newInput.setAttribute('type', 'password')
newInput.setAttribute('id', 'password-input')

newInput.setAttribute('class', 'big')

//classList es una PROPIEDAD de los NODOS del DOM
//que devuelve una lista de todas las clases que tiene
//el elemento y expone los métotodos add y remove
const classes = newInput.classList

classes.add('yellow')
classes.add('white')
classes.remove('big')

//add paragraph function

// function addParagraphToMain(){
    //crear elemento
    //const newElement = document.createElement('p');
    //escribir en el elemento
    //newElement.textContent = JS_TEXT;
    //añadir elemento
    //main.appendChild(newElement)
// }

const JS_TEXT = 'Este texto fue generado por JS'

const addParagraphToMain = () => {
    //crear elemento
    const newElement = document.createElement('p');
    //escribir en el elemento
    newElement.textContent = JS_TEXT;
    //añadir elemento
    main.appendChild(newElement)
}

const removeLastParagraphFromMain = () => {
            //la propiedad lastChild de un NODO
            //guarda su último hijo
    const last = main.lastChild
            //el método removeChild oma un nodo como
            //parametro y lo elimina del DOM
    main.removeChild(last)
}

//event listeners

///hay dos maneras de asociar un nodo a una función 
//para que se ejecute cuando se detecte X evento

///la primera es usanod el método de nodo addEventListener, pasando como parámetros el nombre del evento y la función a ejectuar

addButton.addEventListener('click', addParagraphToMain)

//la otra sintaxis es entrar a la propiedad onNombreDeEvento de un nodo e igualarla a una función con nombre o anónima}

removeButton.onclick = () => {
        //la propiedad lastChild de un NODO
        //guarda su último hijo
    const last = main.lastChild
        //el método removeChild oma un nodo como
        //parametro y lo elimina del DOM
    main.removeChild(last)
}


///popup function
/*
openButton.onclick = () => {
    //cambiar el texto del botón según corresonda al estado del popup
    const current = openButton.textContent;

    if(current.trim() === 'Abrir'){
        //abrir popup  y cambiar texto
        openButton.textContent = 'Cerrar'
        popUp.classList.remove('closed')
    }else{
        openButton.textContent = 'Abrir'
        popUp.classList.add('closed')
        //cerrar popup y cambiar texto
    }

}*/

openButton.onclick = () => {
    //destructuración de objeto
    const {textContent} = openButton;

    popUp.classList.toggle('closed')

    //operador ternario
    textContent.trim() === 'Abrir' ?  openButton.textContent = 'Cerrar' : openButton.textContent = 'Abrir'
}














