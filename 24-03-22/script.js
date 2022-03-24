// ### Esercizio

// Sulla base della lezione odierna:

// - Creare una pagina web che mostri i risultati ottenuti dalla seguente API: https://edgemony-backend.herokuapp.com/movies

// - Creare un form che permetta all'utente di aggiungere un nuovo movie all'interno

// - Aggiungere una 'X' ad ogni card, rappresentante il movie, al cui click rimuove lo stesso dal server

// ### Avanzato

// All'esercizio cui sopra, provare ad aggiungere una modale al cui click mostri la descrizione per intero del movie in questione.

import {makeCard} from "./utilities.js";

/* CARDS RENDER */
const getPostersData = async (URL) => {
    const response = await fetch(`${URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.status >= 200 && response.status <= 299) {
        return await response.json();
    } else {
        window.location.href = "/";
        const h1Element = document.createElement("h1");
        h1Element.textContent = "ERROR 404 PAGE NOT FOUND";
        document.body.append(h1Element);
    }
};

getPostersData("https://edgemony-backend.herokuapp.com/movies").then((data) => {
    data.map((poster) =>
    makeCard(
        poster.id, //IMPORTANT: without ID Fetch DELETE doesn't work; needed as target.
        poster.title,
        poster.poster,
        poster.description,
        poster.year
    )
    );
});

/* FORM INPUT WITH FETCH */
const titleInput = document.querySelector("#title");
const posterInput = document.querySelector("#poster");
const descInput = document.querySelector("#description");
const yearInput = document.querySelector("#year");
const submitInput = document.querySelector("#submit");

submitInput.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: titleInput.value,
            genres: ["animation"],
            poster: posterInput.value,
            description: descInput.value,
            year: yearInput.value,
        }),
    }).then((data) => {
        location.reload();
    });
});