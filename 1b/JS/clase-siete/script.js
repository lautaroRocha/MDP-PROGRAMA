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
        updateDOM()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
        toast(`He añadido a ${obj.name} a tus contactos`)
    }
}

function updateDOM(){
    renewDOM()
    PHONEBOOK.forEach( contacto => createContacDiv(contacto) )   
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

const checkStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if(!savedData){
        return 
    }else{
        const parsedData = JSON.parse(savedData);
        PHONEBOOK.push(...parsedData)
        updateDOM()
    }
}

window.onload = () => {
    checkStorage()
}


