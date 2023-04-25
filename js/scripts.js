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
    pokebutton.innerText = `${pokemon.name}`;
    pokebutton.classList.add('pokebutton');
    pokebutton.setAttribute('data-name', pokemon.name);
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

      //create modal element
      const modal = document.createElement('div');
      modal.classList.add('modal');

      //create modal content
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      //create close button
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
      modalContent.appendChild(closeButton);

      //add event listener
      closeButton.addEventListener('click', function() {
      modal.remove();
      });

      //create modal header with pokemon name
      const modalHeader = document.createElement('h2');
      modalHeader.textContent = pokemon.name;
      modalContent.appendChild(modalHeader);

      //create modal body with details
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      const heightText = document.createElement('p');
      heightText.textContent = `Height: ${details.height}`;
      modalBody.appendChild(heightText);
      const img = document.createElement('img');
      img.src = pokemon.imgUrl;
      img.alt = pokemon.name;
      modalBody.appendChild(img);
      modalContent.appendChild(modalBody);

      // Append img element to modal body
      modalBody.appendChild(img);
      //append modal content to modal
      modal.appendChild(modalContent);
      //append modal to DOM
      document.body.appendChild(modal);
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