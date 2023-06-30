class Friend{
    constructor(name, job){
        this.name = name;
        this.job = job;
    }
    goToWork(){
        console.log(`Soy ${this.name} y trabajo de ${this.job}`)
    }
    
}

const friends = [ new Friend('Raúl', 'albañil'), 
                new Friend('Sofía', 'programadora'),
                new Friend('Julieta', 'tester'),
                new Friend('David', 'mozo'),
                new Friend('Julián', 'SRE')]


////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error


///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro


///escribir una función que tome como parámetro
//un array, una clave y un valor
//y devuelva a una variable el primer elemento del array
//donde clave === valor



//escribi una función returnLongest() que tome como parametros dos string
//y retorne el string más largo
//si ambas string son igualmente largas, devuelve un mensaje 'They're the same'
//si una de las string no es válida. devuelve un mensaje 'One of the values is not a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'