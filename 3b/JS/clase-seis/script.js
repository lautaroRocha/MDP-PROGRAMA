
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
        this.name = name;
        this.tel = tel;
        this.email = email;
    }
    add(){
        PHONEBOOK.push(this)
    }
}

const STORAGE_KEY = 'PHONEBOOK';

const PHONEBOOK = [];

const nameInput = document.querySelector('#name')
const telInput = document.querySelector('#tel')
const emailInput = document.querySelector('#mail')
const addBtn = document.querySelector('#add-btn')
const phonebookDOM = document.querySelector('#agenda') 

const checkIfContactAlreadyExists = ( contact ) => {
        if( PHONEBOOK.some( ctct => ctct.email === contact.email  ) ){
            toast('Ese contacto ya existe', 'error')
        }else{
            contact.add()
            //persistir en storage
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
            updateDOM()
            toast(`He añadido a ${contact.name} a tus contactos`)
        }
}
    
const createContact = (e) => {
    e.preventDefault()

    const name = nameInput.value;
    const tel = telInput.value;
    const email = emailInput.value;

    if(!name || !tel || !email){
        toast('Los datos no son válidos', 'error')
    }else{
        const newContact = new Contact(name, tel, email)
        checkIfContactAlreadyExists(newContact)
    }

    document.querySelector('form').reset()
}

///hacer que esta funcion deje de tomar un parámetro
//y cree los divs iterando el arreglo PHONEBOOK

function updateDOM(){
    agenda.innerHTML = '<h2>Contactos</h2>'
    // for(let i = 0; i<PHONEBOOK.length; i++){
    //     createContactDiv(PHONEBOOK[i])    
    // }
    /// el método forEach del prototipo Array
    ///toma una función como parámetro y la ejectura
    //una vez sobre cada elemento del array
    PHONEBOOK.forEach(contacto => createContactDiv(contacto) )
}

const createContactDiv = ( contact ) => {
    const newContact = document.createElement('div')

    const {name, email, tel} = contact

    newContact.classList.add('contacto')

    const contactName = document.createElement('h3')
    contactName.textContent = name
    const contactMail = document.createElement('span')
    contactMail.textContent = email
    const contactTel = document.createElement('span')
    contactTel.textContent  = tel;

    newContact.appendChild(contactName)
    newContact.appendChild(contactMail)
    newContact.appendChild(contactTel)

    phonebookDOM.appendChild(newContact)
}

addBtn.addEventListener('click', createContact)

///una función que revise el storage
//y si hay algo guardado lo use como valor
//de PHONEBOOK y se ejecute al cargar la página

const checkStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY)
        //solo entra al if si savedData es un valor TRUEISH (útil)
    if(savedData){
        const parsedData = JSON.parse(savedData)
        PHONEBOOK.push(...parsedData)
        updateDOM()
    }
}

///¿cómo hago que la función se ejecute sola
//cada vez que cargo la página?

window.onload = () => {
    checkStorage()
};

