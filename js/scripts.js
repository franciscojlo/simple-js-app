let pokemonList = [
      { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
      { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
      { name: 'Squirtle', height: 1, types: ['water']},
  ];


const pokemon = pokemonList[i];
for (let i=0; i<pokemon.length; i++) {
  document.write(pokemon.name + " (height: " + pokemon.height + ")" );
  if (pokemon.height >= 1.5) {
    document.write("Wow, that's big!!")
      }
  }