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
    listItem.classList.add('list-group-item');
    const pokebutton = document.createElement('button');
    pokebutton.innerText = `${pokemon.name}`;
    pokebutton.classList.add('btn', 'btn-primary');
    pokebutton.setAttribute('data-name', pokemon.name);
    pokebutton.setAttribute('data-toggle', 'modal');
    pokebutton.setAttribute('data-target', '#pokemonModalTitle');
    listItem.appendChild(pokebutton);
    const lineBreak = document.createElement('br');
    listItem.appendChild(lineBreak);
    pokedex.appendChild(listItem);  

    pokebutton.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
  loadDetails(pokemon).then(function(details) {
    const modalTitle = document.querySelector('#pokemonModalTitle');
    const modalBody = document.querySelector('#pokemonModalBody');

    modalTitle.textContent = pokemon.name;
    modalBody.innerHTML = `
      <p> Height: ${details.height} </p>
      <img src="${details.sprites.front_default}" alt="${pokemon.name}">
    `;

    $('#pokemonModal').modal('show');
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