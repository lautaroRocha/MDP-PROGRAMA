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

// let newName, newEmail, newTel;

const PHONEBOOK = [];

const nameInput = document.querySelector('#name')
const telInput = document.querySelector('#tel')
const emailInput = document.querySelector('#mail')
const addBtn = document.querySelector('#add-btn')
const phonebookDOM = document.querySelector('#agenda') 


// const newNameInput = document.querySelector('#new-name')
// const newTelInput = document.querySelector('#new-tel')
// const newEmailInput = document.querySelector('#new-email')
// const confirmEditBtn = document.querySelector('#confirm-edit')
// const popUpEdit = document.querySelector('.pop-up-edit')

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

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Borrar'

    editBtn.addEventListener('click', editContact)
    deleteBtn.addEventListener('click', deleteContact)

    newContact.appendChild(contactName)
    newContact.appendChild(editBtn)
    newContact.appendChild(contactMail)
    newContact.appendChild(deleteBtn)
    newContact.appendChild(contactTel)

    phonebookDOM.appendChild(newContact)
}

//editar contacto
const editContact = (e) => {
    ///target es una propiedad de la interfaz Evento que hace referencia al nodo del DOM donde se detectó el mismo

    //nextSiblinbg es una propiedad de los nodos de DOM que hace referencia al elemento hermano a la derecha
    const selectedEmail = e.target.nextSibling.textContent

    ///encontrar el contacto seleccionado
    const selectedContact = PHONEBOOK.find( contacto => contacto.email === selectedEmail)
    const {name, tel, email} = selectedContact;
    // popUpEdit.classList.remove('closed')

    ///conseguir los nuevos valores
    const {newName, newTel, newMail} = getNewValues()

    ///editarlo
    const selectedIndex = PHONEBOOK.indexOf(selectedContact)
    ///guardarlo
    PHONEBOOK[selectedIndex].name = newName ? newName : name;
    PHONEBOOK[selectedIndex].tel = newTel ? newTel : tel ;
    PHONEBOOK[selectedIndex].email = newMail ? newMail : email;

    //actualizar el storage
    //actualizar el dom
    localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
    updateDOM()
}


//borrar contacto
const deleteContact = (e) => {
    const selectedEmail = e.target.previousSibling.textContent
    const selectedContact = PHONEBOOK.find( contacto => contacto.email === selectedEmail)
    const selectedIndex = PHONEBOOK.indexOf(selectedContact)

    const confirmation = confirm(`¿Segurx que quieres eliminar a ${selectedContact.name} de tus contactos?`)

    if(confirmation){
        PHONEBOOK.splice(selectedIndex, 1)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
        updateDOM()
    }
    
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

// confirmEditBtn.onclick = (e) => {
//     getValuesFromEditPopUp(e)
// }


// function getValuesFromEditPopUp(e) {
//     e.preventDefault()
//     popUpEdit.classList.add('closed')

//     newName = newNameInput.value
//     newTel =  newTelInput.value
//     newEmail = newEmailInput.value
// }

function getNewValues(){
    const newName = prompt('Nuevo nombre')
    const newMail = prompt('Nuevo mail')
    const newTel = prompt('Nuevo telefono') 

    return {
        newName : newName,
        newMail : newMail,
        newTel : newTel
    }
}