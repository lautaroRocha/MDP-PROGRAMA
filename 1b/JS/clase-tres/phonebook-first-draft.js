const phonebook = []

const createContact = (nombre, apellido, numero) => {
    let contacto = {}
        contacto.nombre = nombre;
        contacto.apellido = apellido;
        contacto.numero = numero;
    return contacto;
};

const addContact = (contacto) => {
    phonebook.push(contacto)
    console.log('Agregué un contacto nuevo')
};

const findContact = (nombre) => {
    let found = phonebook.find((contact) =>{
        contact.name === nombre
    })
    return found;
}

const removeContact = (nombre) => {
    ///encontrar el índice del contacto
    const contact = findContact(nombre)
    console.log()
    const indexToRemove = phonebook.indexOf(contact)
    phonebook.splice(indexToRemove, 1)
    ///quitar ese elemento del arreglo
};

const showContacts = () => {
    console.log(phonebook)
}