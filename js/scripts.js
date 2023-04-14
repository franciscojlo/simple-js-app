const pokemonRepository = (function() {
  const pokemonList = [];

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
    if (pokemon.height >= 1.5) { 
      pokebutton.innerText += " - Wow, that's big!";
    }        
    const lineBreak = document.createElement('br');
    listItem.appendChild(lineBreak);
    pokedex.appendChild(listItem);  

    pokebutton.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(details) {
      console.log(details);
      pokemon.imgUrl = details.sprites.front_default;
      pokemon.height = details.height;
      const button = document.querySelector(`.pokebutton[data-name="${pokemon.name}"]`);
      button.innerText = `${pokemon.name} (height: ${pokemon.height})`;
      if (pokemon.height >= 1.5) {
        button.innerText += " - Wow, that's big!";
      }
    });
  }

  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          const pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

    function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then(function(response) {
        return response.json();
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  return { 
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});