const pokemons = document.querySelector('#pokemons');

function converterJsonEmLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">
                        grass
                    </li>
                    <li class="type">
                        poison
                    </li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Foto pokédex ${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemonsList().then((pokemonsList = []) => {
    const newPokemonList = pokemonsList.map((value) => converterJsonEmLi(value));
    const newHTML = newPokemonList.join(""); //Retira a vírgula padrão
    pokemons.innerHTML = newHTML;
    
}).catch((error) => {
    pokemons.innerHTML = 'Desculpe, a pokédex não está funcionando no momento 😞<br>';
    pokemons.innerHTML += `Causa do erro: ${error}`;
    pokemons.innerHTML += '<img src="./assets/images/error-pokedex.jpg" style="border-radius: 1rem">';
})

