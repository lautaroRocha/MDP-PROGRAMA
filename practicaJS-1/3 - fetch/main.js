const CHARACTERS = []

const url = 'https://rickandmortyapi.com/api/character'

const body = document.querySelector('body')

const fetchData  = () => {
    ///la función fetch() realiza una petición HTTP (por defecto GET pero se puede configurar a cualquier otro método) y devuleve una promesa

    ///para manejar promesas, se usan tres méotods
    //then ---> para cuando se cunpla
    //catch ---> para cuando haya un error
    //finally ---> al final, se haya cumplido o no
   return fetch(url)
        //en then... entra la promesa cuando todo va yendo bien
        ///para poder consumir el JSON de una respuesta, tenemops que acceder a su méotod json()
        //el méotod json() tambien devuelve una promesa, que hay que manejar por separado
        .then((res)=> res.json())
        .then((data) =>{ 
            CHARACTERS.push(...data.results);
            document.querySelector('button').style.display = 'none'
        })
        //.then((data) => console.log(data))
        ///en catch... entra cuando hay un error, y nos da la opción de manejarlo
        .catch((err)=>{console.error('HUBO UN ERROR : ' + err)})
        ///el finally SIEMPRE se ejectura al finalizar la petición
        .finally(console.log('Fetching terminado'))
}

// const fetchData = async() => {
//     try{
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
//     }
//     catch {
//         console.log(error)
//     }
// }


// async function fetchData(){

// }

const createCards = () => {
    console.log('cards')
    CHARACTERS.forEach((personaje)=>{
        createCharacterCard(personaje)
    })
}

const createCharacterCard = (char) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h1')
    name.textContent = char.name
    const gender = document.createElement('span')
    gender.textContent = char.gender === 'Male' ? '♂️' : '♀️';
    const img = document.createElement('img')
    img.setAttribute('src', char.image)

    const link = document.createElement('a')
    link.setAttribute('href', char.url)
    link.appendChild(img)


    card.appendChild(name)
    card.appendChild(gender)
    card.appendChild(link)
    body.appendChild(card)

}


document.querySelector('button').onclick = async() => {
    await fetchData();
    createCards();
}