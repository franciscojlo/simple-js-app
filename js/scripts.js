const pokemonList = [
      { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
      { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
      { name: 'Squirtle', height: 1, types: ['water']},
  ];

for (let i = 0; i<pokemonList.length; i++) {
  const pokemon = pokemonList[i];
  document.write(`${pokemon.name} (height: ${pokemon.height})`);
  if (pokemon.height >= 1.5) {
    document.write(" - Wow, that's big!!")
      }
      document.write("<br>");
  }