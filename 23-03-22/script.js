// ### Esercizio

// Sulla base della lezione odierna:

// Creare una chiamata API all'indirizzo https://fakestoreapi.com/products, in modo che:

// - Vengano catturati tutti gli elementi presenti nell'array
// - Renderizzare delle cards relative a ogni singolo oggetto
// - Al click sulla card (quindi il singolo prodotto), questo viene rimosso dalla lista

// Fondamentale:

// - Utilizzare fetch per la chiamata, ma gestire il tutto servendoci di async/await!!
/*------------------------------------------------------------------------------------------------*/
import {makeCard, getBeesData, cutDesc} from "./utilities.js";

/* CARDS RENDERING AND OPTIONAL ADDITIONS */
getBeesData("https://fakestoreapi.com/products").then((data) => { //Invocation in the main js sheet; substituting makeCard previous parameters with final values 
    data.map((item) => {
        makeCard(
            item.title,
            item.price + " £",
            item.image,
            cutDesc(item.description),
            item.category
        );

    })});
