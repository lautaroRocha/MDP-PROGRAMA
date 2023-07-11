function toast(txt, type){
    if(type === 'error'){
        Toastify({
            text: txt,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #e80e0e, #e8910e)",
              fontFamily: "system-ui, Roboto"
            }
          }).showToast();
    }else{
        Toastify({
            text: txt,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              fontFamily: "system-ui, Roboto"
            }
          }).showToast();
    }
}

class Contact {
    constructor(name, tel, email){
        this.name = name
        this.tel = tel
        this.email = email
    }
    add(){
        PHONEBOOK.push(this)
    }
}

const PHONEBOOK = [];

const STORAGE_KEY = 'PHONEBOOK';

const addButton = document.querySelector('#add-btn');
const nameInput = document.querySelector('#name')
const telInput = document.querySelector('#tel')
const mailInput = document.querySelector('#mail')
const phonebookDOM = document.querySelector('#agenda')

const createContact = (e) => {
    e.preventDefault()
  
    const name = nameInput.value;
    const tel = telInput.value;
    const mail = mailInput.value;
    
    if(!name || !tel || !mail ){
        toast('Ese contacto ya existe', 'error')
    }else{
        let newContact = new Contact(name, tel, mail)
        checkIfContactExists(newContact) 
    }

    document.querySelector('form').reset()
}

function checkIfContactExists( obj ){
    if( PHONEBOOK.some( ( cntct ) => cntct.email === obj.email  ) ){
       toast('Ese correo ya corresponde a un contacto', 'error')
    }else{
        obj.add()
        ///guardar en memoria del navegador
        updateDOM()
        ///el navegador cuenta con dos APIs de almacenamiento,
        //el sessionStorage y el localStorage. Ambos funcionan con
        //un sistema de clave valor, ambos solo pueden almacenar strings
        //la diferencia es durante cuanto tiempo persisten los datos.

        //localStorage === guarda los datos hasta que son borrados (por el usuario
        // o el programa)
        //sessionStorage === guarda los datos hasta que termina la sesión (se cierran
        //la pestaña o el navegador)

        ///para acceder a cualquier storage, lo hacemos con un objeto global
        //del navegador que tiene tres métodos.

        //los méotods set y get item, guardan y recuperan información respectivamente.
        //ambos llevan dos parámetros, primero la clave donde queremos guardar
        //y después el valor

        //para guardar estructuras de datos como  strings usamos la interfaz JSON
        //y pasamos la estrucura como parámetro de su método stringify()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
        //localStorage.getItem()
        //con este método vacíamos todo el storage
         //localStorage.clear()
         //localStorage.removeItem(key)
        toast(`He añadido a ${obj.name} a tus contactos`)
    }
}

function updateDOM(){
    //iterar sobre PHONEBOOK pasando
    //cada contacto como parámetro a esta función
    renewDOM()
    
    /*
    for(let i = 0; i<PHONEBOOK.length; i++ ){
        createContacDiv(PHONEBOOK[i])
    }
    */

    //el método forEach del prototipo Array 
    //recorre todo el arreglo y ejecuta la misma función
    //sobre cada elemento

    PHONEBOOK.forEach( contacto => createContacDiv(contacto) )   

    //createContacDiv()
}

const renewDOM = () => {
    agenda.innerHTML = '<h2>Contactos</h2>'
}

const createContacDiv = (obj) => {

    const {name, tel, email} = obj

    let newContact = document.createElement('div')
    newContact.classList.add('contacto')

    const nameNode = document.createElement('h3')
    nameNode.textContent = name;
    const telNode = document.createElement('span')
    telNode.textContent = tel;
    const mailNode = document.createElement('span')
    mailNode.textContent = email;

    newContact.appendChild(nameNode)
    newContact.appendChild(mailNode)
    newContact.appendChild(telNode)

    
    agenda.appendChild(newContact)
} 


addButton.onclick = (e) => {
    createContact(e);
}


///funcion que al inicar el programa revise el almacenamiento
const checkStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if(!savedData){
        return 
    }else{
        //guardamos en una variable el resultado parseado de la información
        //que teníamos en storage
        const parsedData = JSON.parse(savedData);
        //hacemos un push del spread de parsedData
            //el spread operator ( ... ) me permite acceder por separado
            //a todos los valores de un array
        PHONEBOOK.push(...parsedData)
        updateDOM()
    }
}


window.onload = () => {
    checkStorage()
}


