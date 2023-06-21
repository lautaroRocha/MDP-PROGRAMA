let amountOfBoludos = 0;
const result = document.querySelector('#result')
const btn = document.querySelector('btn')

const addOneBoludo = () => {
    amountOfBoludos++;
    let quote = `Hoy atendí ${amountOfBoludos}`;
    result.textContent = quote;
}

btn.onclick = addOneBoludo;








