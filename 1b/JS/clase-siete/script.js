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

    const editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'edit-btn')
    editBtn.textContent = 'Editar'
    const deleteBtn =document.createElement('button')
    deleteBtn.setAttribute('class', 'delete-btn')
    deleteBtn.textContent = 'Borrar'

    ///lamar a la función para editar contacto
    editBtn.addEventListener('click', editContact)
    ///lamar a la función para borrar contacto
    deleteBtn.addEventListener('click', deleteContact)

    newContact.appendChild(nameNode)
    newContact.appendChild(editBtn)
    newContact.appendChild(mailNode)
    newContact.appendChild(deleteBtn)
    newContact.appendChild(telNode)

    
    agenda.appendChild(newContact)
} 

const editContact = (e) => {
    //la propiedad target de un evento hace referencia al nodo del DOM sobre el que impactó el evento
    //la propiedad nextSibling muestra al siguiente nodo hermano de un nodo
    const {nextSibling} = e.target
    ///recibir mail 
    const selectedMail = nextSibling.textContent
    //tomar los nuevos datos (prompt)
    const {newName, newEmail, newTel} = askNewData()
    //encontrar el item del array con ese mail para guardar los datos
    const selectedContact = PHONEBOOK.find( ( person ) => person.email === selectedMail )
    //encontrar el índice del contacto para editarlo
    const selectedIndex = PHONEBOOK.indexOf(selectedContact)
    //actualizar el array
    PHONEBOOK[selectedIndex].name = newName.trim() ? newName : selectedContact.name
    PHONEBOOK[selectedIndex].email = newEmail.trim() ? newEmail : selectedContact.email
    PHONEBOOK[selectedIndex].tel = newTel.trim() ? newTel : selectedContact.tel
    //actualizar el storage
    //actualizar el dom 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
    updateDOM()
}

function askNewData(){
    const newName = prompt('Nuevo nombre')
    const newEmail = prompt('Nuevo email')
    const newTel = prompt('Nuevo teléfono')

    return {
        newName : newName,
        newEmail : newEmail,
        newTel : newTel
    }
}

const deleteContact = (e) => {
    ///recibir mail 
    const selectedMail = e.target.previousSibling.textContent;
    //encontrar el item del array con ese mail 
    const selectedContact = PHONEBOOK.find(( contacto ) => contacto.email === selectedMail)
    const confirmation = confirm(`¿Seguro que quieres borrar a ${selectedContact.name} de tus contactos? `)
    if(confirmation){
        //y eliminarlo
        //actualizar el array
        const selectedIndex = PHONEBOOK.indexOf(selectedContact)
        PHONEBOOK.splice(selectedIndex, 1)
        //actualizar el storage
        //actualizar el dom 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
        updateDOM()
    }

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

addButton.onclick = (e) => {
    createContact(e);
}

window.onload = () => {
    checkStorage()
}


