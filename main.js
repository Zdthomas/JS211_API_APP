// require('dotenv').config()





let api_url = 'https://pokeapi.co/api/v2/pokemon?limit=151'



async function getPokemon () {

    // To Do
    // Grab info from API
    // Grab name, image, and stats
    // make button to generate 3 Pokemon (random)
    // Button also displays text info about the Pokemon
    // Make a reset option to get another three Pokemon

    const response = await fetch(api_url)

    const data = await response.json();

    

    

    document.getElementById('pokemon-info').innerText = `${data.name}`


    const li = document.createElement('li')


    li.append(data)
    
    console.log(data)

    

}


const displayPokemon = () => {




}