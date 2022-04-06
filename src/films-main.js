import { navHamburguer } from './nav.js';
import { filterDirector, filterFilms, filters, filterFilmCharacters } from './data.js';

import data from './data/ghibli/ghibli.js';

navHamburguer()

const films = data.films

function printCards(filmes) {
  document.getElementById('cardsFilms').innerHTML = filmes.map((item) =>
    `
  <div class="containerCards">
    <div class="moviePoster">
       <img src = "${item.poster}" class = "poster" alt="Imagem do poster">
    </div>
    <div class="movieDetails">
    <div class="movieInformation">
        <h1 class= "title">${item.title} </h1>
        <h3> Year </h3> <p class="year">${item.release_date}</p>
        <h3> Description:</h3> <p class="description"> ${item.description}</p>
        <h3> Director: </h3> <p class= "director">${item.director}<p>
        <h3> Producer: </h3> <p class="producer">${item.producer}<p>
        <h3> Score: </h3> <p class= "year">${item.rt_score}<p>
      </div>
     </div>
    </div>
    `
  )
    .join('');
}

printCards(films)

const searchMovie = () => {
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  printCards(movieSelec);
}

const searchFilms = document.querySelector("#inputSearch");
searchFilms.addEventListener("keyup", searchMovie);


const ordenator = (e) => {
  const orderSelec = e.target.value;
  if (orderSelec !== "") {
    const filterOrder = filters(films, orderSelec)
    printCards(filterOrder)
  }
}
const order = document.getElementById("inputOrder")
order.addEventListener("change", ordenator)

const orderAge = document.getElementById("inputAge")
orderAge.addEventListener("change", ordenator)

const orderScore = document.getElementById("inputScore")
orderScore.addEventListener("change", ordenator)

const directorSelected = document.getElementById("inputDirector")
directorSelected.addEventListener("change", (event) => {
  const resultDirector = filterDirector(films, event.target.value)
  printCards(resultDirector)
})

const filmsCharacters = document.getElementById("inputCharactersFilm")
console.log(filmsCharacters)
filmsCharacters.addEventListener("change", (event) => {
  console.log("vai!!")
  const resultCharactersFilms = filterFilmCharacters(films, event.target.value)
  printCards(resultCharactersFilms)
})

let clear = document.querySelector('.resetButton')
clear.addEventListener('click', resetFilter, printCards)

function resetFilter() {
  location.reload()
}