////vamos a realizar un programa
///en el que el usuario ingrese películas.
//cumplida cierta condición, pasaremos a otro bucle
//donde dejaremos al usuario eliminar una película de la lista.



const normalizaArray = (arr) => {
   return arr.join(', ')
} 




const movies = []

const lowerCaseMovies = []

const DESIRED_LENGTH = 4
const FINAL_LENGTH = 3
const INVALID_INDEX = -1

for(let i = 0; movies.length < DESIRED_LENGTH; i++){
    const newMovie = prompt('Podrías recomendarme una película?')
    if(newMovie !== null && newMovie.trim() !== ''){
        movies.push(newMovie)
    }else{
        alert('Por favor, ingresá una peli válida')
    }
}

for(let i = 0; lowerCaseMovies.length < DESIRED_LENGTH; i++){
    const lowerCaseMovie = movies[i].toLowerCase()
   lowerCaseMovies.push(lowerCaseMovie)
}

alert(`Me recomendaste que vea ${normalizaArray(movies)} `)


do{
    const movieToRemove = prompt('Entre todas estas películas' + normalizaArray(movies) + '. ¿Cuál puedo eliminar de la lista?')
    const lowerCaseTrimmedSelection = movieToRemove.toLowerCase().trim()
    const indexToRemove = lowerCaseMovies.indexOf(lowerCaseTrimmedSelection)
    if(indexToRemove !== INVALID_INDEX){
        movies.splice(indexToRemove, 1)
    }else{
        alert('Pero esa no está en la lista')
    }
}while( movies.length !== FINAL_LENGTH )


alert('Me quedé con ' + normalizaArray(movies))


