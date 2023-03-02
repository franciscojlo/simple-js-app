let pokemonList = [
      { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
      { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
      { name: 'Squirtle', height: 1, types: ['water']},
  ];

for (let i=0; i<pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" );
if (pokemonList[i].height >= 1.5) {
    document.write("Wow, that's big!!")
    }
}