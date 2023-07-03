const phonebook = []

class Contact{
  constructor(name, number){
    this.name = name,
    this.number = number
  }
}

/// valores nulish o falsey --> Nan, null, undefined, flase, 0, ''

/// valores trueish ---> variables, objetos, numeros + y -

const showContacts = () => {
  console.log(phonebook)
}

const createContact = (name, number) => {
  if(!name || !number){
    console.log('por favor ingresa el nombre y el numero del contacto')
    return 
  }
  const contact = new Contact(name, number)
  addContactToPhonebook(contact)
}

const addContactToPhonebook = (contact) => {
  phonebook.push(contact)
}

const deleteContact = (name) => {
  const contactToDelete = findContact(name)
  const indexToDelete = phonebook.indexOf(contactToDelete)
  phonebook.splice(indexToDelete, 1)
}

const showContact = (name ) => {
  const contactToShow = findContact(name)
  console.log('El contacto es: ' + JSON.stringify(contactToShow))
} 
const findContact = (name) => {
  return phonebook.find( item => item.name === name )
}

createContact('Lautaro', 35)
createContact('javier', 15)
createContact('David', 25)
createContact('José', 25)
createContact('María', 25)
createContact('Cecilia', 25)
createContact('Sofía', 25)
createContact('David', 25)

showContacts()

deleteContact('María')
deleteContact('José')


showContacts()

showContact('javier')


