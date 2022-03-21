
const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
  ];

/* TAG CONST */  
const peopleCards = document.querySelector("#cardsItems");

/* SEARCH CONST */
const searchBox = document.querySelector("#typeSearch");

/* ADD PEOPLE CONST */
const names = document.querySelector("#inputName");
const universe = document.querySelector("#inputUniverse");
const button = document.querySelector("#addPeople");

/* FUNZIONI */

// REMOVING DASH AND FIRST RENDERING                                                                Commento
const renderCards = (value = "") => {                                                               /* Creo una costante, avvio una funzione specificando value = empty string */
    const filteredPeople = people.filter((e) => e.toLowerCase().includes(value.toLowerCase()));     /* Creo una costante dentro la mia funzione con cui filtro gli items dentro il mio array iniziale e creo una seconda funzione con cui imposto il lower case a tutti gli elementi e valori (tornerà utile con cerca poi) */
    peopleCards.innerHTML =filteredPeople.map((e) =>                                                /* Inserisco nel DOM al selettore di tag nella posizione in cui mi interessa la costante precedente 'mappandola' */
    `<div class="card"><strong><p class="itemName">${e.split(" - ")[0]}</p></strong><p class="itemUni">${e.split(" - ")[1]}</p></div>`).join(""); /* Avvio una terza funzione e inserisco backticks e tag; tra i tag inserisco 2 template literals con cui splitto e divido ogni item del mio array partendo dal (dash)e assegnando il valore 0 per la prima sezione e 1 per la seconda */
};                                                                                                  /* Applico join alla funzione .map per rimuovere le virgole */

// SEARCH FILTER W KEYUP                            Commento
searchBox.addEventListener("keyup", () => {         /* Al momento di scrivere nella barra search avvia l'evento */
    const searchValue = searchBox.value;            /* Creo una costante a cui applico il valore pari a ciò che scrivo all'interno della barra search */
    renderCards(searchValue);                       /* Richiamo la funzione principale a cui assegno la mia costante precedente in modo tale da applicare la funzione filtro e effettuare la ricerca all'interno della mia lista di nomi e universi. Amen */
});

// ADD BUTTON                                       Commento
button.addEventListener("click", () => {            /* Al click di +aggiungi avvia l'evento */
    const addName = names.value;                    /* Creata una funzione creo al suo interno 2 costanti a cui associo i valori che- */
    const addUniverse = universe.value;             /* -vengono creati scrivendo nei box in html */
    people.push(`${addName} - ${addUniverse}`);     /* Pusho all'interno dell'array iniziale una stringa composta dalle due costani precedenti all'interno di una stringa con 2 template literals e dash */
    renderCards();                                  /* Richiamo la mia funzione principale e avvio il ciclo in automatico */
});





renderCards(); 
