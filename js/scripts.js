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

  return { 
    getAll: getAll,
    add: add,
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
        document.write(`${pokemon.name} (height: ${pokemon.height})`);
        if (pokemon.height >= 1.5) {
          document.write(" - Wow, that's big!");
        }
        document.write('<br>');
})();