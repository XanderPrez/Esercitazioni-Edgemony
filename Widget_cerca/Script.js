/* RENDERING DELLA LISTA */
const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
];

const filmList = document.querySelector("#listaFilm");

const renderList = () => {
    let insMovies = movies.map((e) => `<li>${e}</li>`)
    filmList.innerHTML = insMovies.join("");
};


renderList();
/*-----------------------------------------------------*/

/* FUNZIONE SEARCH */

const inpText = document.querySelector("#inputTxt");
const button = document.querySelector("#search");

const renderSearch = () => {
    const research = movies.filter((e) => e === inpText.value);
    filmList.innerHTML = research.map((e) => `<li>${e}</li>`);
    
};


button.addEventListener("click", renderSearch);
