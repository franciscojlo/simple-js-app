const pokemonRepository = (function() {
  const pokemonList = [
          { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
          { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
          { name: 'Squirtle', height: 1, types: ['water']},
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon); 
  } 

  function addListItem(pokemon) {
        const pokedex = document.querySelector('.pokedex');
        const listItem = document.createElement('li');
        const pokebutton = document.createElement('button');
        pokebutton.innerText = `${pokemon.name} (height: ${pokemon.height})`;
        pokebutton.classList.add('pokebutton');
        listItem.appendChild(pokebutton);
        pokedex.appendChild(listItem);
        if (pokemon.height >= 1.5) {
           pokebutton.innerText += " - Wow, that's big!";
          }        
          const lineBreak = document.createElement('br');
          pokedex.appendChild(listItem);  

          pokebutton.addEventListener('click', function() {
            showDetails(pokemon);
          })
        }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return { 
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});