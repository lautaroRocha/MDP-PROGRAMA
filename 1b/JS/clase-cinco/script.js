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


///a partir del formulario, generar una instancia de la clase
//Contact, añadirla al fin del array,y actualizar el DOM para que esté
//sincronizado con el array PHONEBOOK


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

const addButton = document.querySelector('#add-btn');

const nameInput = document.querySelector('#name')

const telInput = document.querySelector('#tel')

const mailInput = document.querySelector('#mail')

const phonebookDOM = document.querySelector('#agenda')

///crear el contacto


const createContact = (event) => {
    //prevent default es un metodo del protitpo
    //EVENTO que evite el comportamiento
    //predeterminado del mismo
    event.preventDefault()
    //los elementos input no tienen nodo de texto
    //sino una propiedad llamada VALUE que representa
    //el valor ingresado
    const name = nameInput.value;
    const tel = telInput.value;
    const mail = mailInput.value;
    /*
        el operador lógico ! NOT
        devuelve TRUE siempre que es llamado
        sobre un expresión con valor falsy.
        los valores falsy en JS:
        null, undefined, false, 0, '', NaN

        el operador lógico OR || se usa para unir
        assertions en un bloque que devuelve true
        si una assertion o la otra es verdadera
    */
    if(!name || !tel || !mail ){
        toast('Ese contacto ya existe', 'error')
    }else{
        let newContact = new Contact(name, tel, mail)
        checkIfContactExists(newContact) 
    }
    document.querySelector('form').reset()
}


//enviarlo al array
function checkIfContactExists( obj ){
    if( PHONEBOOK.some( ( cntct ) => cntct.email === obj.email  ) ){
       toast('Ese correo ya corresponde a un contacto', 'error')
    }else{
        ///accedo a su método add, el cual lo
        //pushear a PHONEBOOK
        obj.add()
        updateDOM(obj)
        toast(`He añadido a ${obj.name} a tus contactos`)
    }
}


//actualizar el dom
function updateDOM( obj ){
    //la desestructuracion me permite
    //guardar el valor de propiedas de un obj
    //en variables del mismo nombre
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
