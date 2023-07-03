//el DOM es una representación en árbol de nodos
//del documento HTML. La DOM API del navegador
//nos ofrece varios metodos para acceder y modificar 
//dichos nodos.

//modos de acceso

///los metodos de acceso al DOM que incluyen las palabras
//'ElementSSS' o 'All', devuelven un array con todos 
//los elementos que matchean al parametro
//getElementsByTagName, querySelectorAll

//getElementById devuelve el primer nodo que tiene un
//atributo ID que matchea con el parámetro
//getElementsByClassName nos devuelve un array de nodos que matchean su clase con el parámetro

//los método más poderosos para acceder a los nodos del DOM son querySelector y 
//querySelectorAll, que toman
//como parámetro un selector con la sintaxis de CSS
const openButton = document.getElementById('open-btn');
const addButton = document.querySelector('#add-btn')
//por id
const removeButton = document.querySelector('#rmv-btn')
//por clase
const popUp = document.querySelector('.pop-up')
//por nombre de tag
const allButtons = document.querySelectorAll('button')

//el metodo createElement de la interfaz document, me deja crear nuevos nodos en el documento que quedan almacenados en memoria hasta que sean 'appendeados' o agregados al documento / nodo.
const newElement = document.createElement('p')

//con el método appendChild() podemos añadir nuevos hijos a un NODO DOM.

const main = document.querySelector('main')

function addElementToMain(ele){
    main.appendChild(ele)
}

///las propiedades textContent e innerHTML nos dejan añadir contenido al nodo-texto de cada nodo DOM

///la propiedad innerHTML me deja escribir como un string código HTML que se agrega adentro del nodo
//ocupa el mismo espacio que textContent, por lo que se sobreescriben entre ellas
newElement.innerHTML = '<button>BOTÖN</button>'
newElement.textContent = '<button>BOTÖN</button>'


const newInput = document.createElement('input')

//para cambiar/asignar los atributos de algún nodo
//usamos el método setAttribute(), que toma como parámetros primero el atributo, y luego el valor
//este metodo deja el atributo con el valor especificado
//sin añadirvalores preexistentes
newInput.setAttribute('type', 'date')
newInput.setAttribute('class', 'big')


//el método classList me devuelve un array con
//todas las clases aplicadas sobre un nodo
const inputClasses = newInput.classList
//puede añadir o remover valores de esas clases
inputClasses.add('yellow')
inputClasses.remove('yellow')

// function addParagraphToMain(){
    // const elementToAppend = document.createElement('p')
    // elementToAppend.innerText = 'Este parráfo lo creé con JS'
    // main.appendChild(elementToAppend) 
// }

const addParagraphToMain = () => {
    const elementToAppend = document.createElement('p')
    elementToAppend.innerText = 'Este parráfo lo creé con JS'
    main.appendChild(elementToAppend) 
}


//hay dos sintaxis para detectar eventos
//y asociarlos a la invocación de una función

//primero, podemos usar el método addEventListener
//que toma como primer parametro el nombre de un evento y como segundo la función a ejecutar cuando se detecte ese evento
addButton.addEventListener('click', addParagraphToMain)

//esta es la sintaxis más moderna, en la que accedo
//a la propiedad on+nombreDeEvento y la igualo a una función
removeButton.onclick = () => {
    //accedo al ultimo hijo del nodo
    const lastP = main.lastChild
    //lo remuevo
    main.removeChild(lastP)
};

// openButton.onclick = () => {
//     const currentText = openButton.textContent.trim()
//     console.log(currentText)
//     if(currentText === 'Abrir'){
//         //cambiar texto de botón
//         openButton.textContent = 'Cerrar'
//         //abrir popup 
//         popUp.classList.toggle('closed')
//     }else{
//         //cambiar texto del botón
//         openButton.textContent = 'Abrir'
//         //cerrar popup
//         popUp.classList.toggle('closed')
//     }
// }

//un rework para una sintaxis 
//más resumida y moderna
openButton.onclick = () => {
    //desestrucuración de un objeto
    const { textContent } = openButton
    textContent.trim() === 'Abrir' ? openButton.textContent = 'Cerrar' : openButton.textContent = 'Abrir';
    popUp.classList.toggle('closed')
}


