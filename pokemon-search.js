const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input")
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonW = document.getElementById("weight");
const pokemonH = document.getElementById("height");
const pokemonHP = document.getElementById("hp");
const pokemonAtt = document.getElementById("attack");
const pokemonD = document.getElementById("defense");
const pokemonSA = document.getElementById("special-attack");
const pokemonSD = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed")
const types = document.getElementById("types");
const spriteContainer = document.getElementById('sprite-container');

const fetchData = async (data) => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await res.json();
    pokemonName.textContent = `${data.name}`
  } 
  catch{
    console.log("Pokemon not found")
  }
}
searchBtn.addEventListener('click', e=>{
  e.preventDefault();
  fetchData()
})
