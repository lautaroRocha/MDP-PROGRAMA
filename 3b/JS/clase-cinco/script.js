///a partir del formulario, generar una instancia de la clase
//Contact, añadirla al fin del array,y actualizar el DOM para que esté
//sincronizado con el array PHONEBOOK

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

const PHONEBOOK = [];

const nameInput = document.querySelector('#name')

const telInput = document.querySelector('#tel')

const emailInput = document.querySelector('#mail')

const addBtn = document.querySelector('#add-btn')

const phonebookDOM = document.querySelector('#agenda') 

const checkIfContactAlreadyExists = ( contact ) => {
        /// VALIDACIONES
    /*
        el operador lógico OR ( || ) devulve true
        cuando al menos una de las expresiones a su derecho e izquierda son verdaderas

        el operado lógico NOT ( ! ) devuelve true cuando es llamado sobre una expresión que deuvle un valor FALSY

        los valores FALSY en JS son:
        null, NaN, undefined, "", 0 y false
    */
    //VERIFICAR QUE NO EXISTA YA EL CONTACTO
         //el método de array SOME devuelve TRUE cuando encuentra una coincidencia
        //en el array        
        if( PHONEBOOK.some( ctct => ctct.email === contact.email  ) ){
            toast('Ese contacto ya existe', 'error')
        }else{
            //enviarlo al array
            contact.add()
            updateDOM(contact)
            toast(`He añadido a ${contact.name} a tus contactos`)
        }
}
    
///crear el contacto
const createContact = (event) => {
    ///siempre que asociamos una función a un evento,
    //el evento es pasado como parámetro a esa función.
    //si queremos acceder a los métodos y propiedades
    //del evento, añadimos un parámetro 'e' (en este caso 'event') a la función.

    //el método preventDefault de la interfaz Event
    //evita el comportamiento por defecto de algunos eventos, por ejemplo el botón de submit.

    //la propiedad target indica el nodo donde se disparó el evento

    event.preventDefault()

    //para acceder a lo que fue ingresado por el usuario
    //en un input o un select, entramos a la propiedad VALUE,
    //ya que los input no tienen propiedad textContent
    const name = nameInput.value;
    const tel = telInput.value;
    const email = emailInput.value;

    const newContact = new Contact(name, tel, email)
    if(!name || !tel || !email){
        toast('Los datos no son válidos', 'error')
    }else{
        checkIfContactAlreadyExists(newContact)
    }


    ///RESETEAR EL FORM
    document.querySelector('form').reset()

    console.log(PHONEBOOK)
}


function resetForm (){
    // nameInput.value = ''
    // telInput.value = ''
    // emailInput.value = ''
}





//actualizar el dom
function updateDOM(contact){
    //tengo que crear un nodo
    //asignarle la clase contacto
    //asignarle tres nodos hijos (h3. span, span)
    //llenar esos hijos con los valores
    //y agregar ese nodo a phonebookDOM
    const newContact = document.createElement('div')

    newContact.classList.add('contacto')

    const contactName = document.createElement('h3')
    contactName.textContent = contact.name
    const contactMail = document.createElement('span')
    contactMail.textContent = contact.email
    const contactTel = document.createElement('span')
    contactTel.textContent  = contact.tel;

    newContact.appendChild(contactName)
    newContact.appendChild(contactMail)
    newContact.appendChild(contactTel)

    phonebookDOM.appendChild(newContact)

}


addBtn.addEventListener('click', createContact)
