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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
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

function updateDOM(){
    agenda.innerHTML = '<h2>Contactos</h2>'
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

const checkStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if(savedData){
        const parsedData = JSON.parse(savedData)
        PHONEBOOK.push(...parsedData)
        updateDOM()
    }
}

window.onload = () => {
    checkStorage()
};

