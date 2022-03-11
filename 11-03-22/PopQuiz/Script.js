/*
ESERCIZI SULLO SCOPE ATTENZIONE: provare a dare prima la risposta e solo dopo testare il codice!! 
Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'. */

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA: 3.14; la variabile PI all'interno di uno scope globale viene letta sia nel primo caso che nel secondo.

const PI = 3.14;

console.log(PI);

if (PI >= 3) { console.log(PI); }

// Es. 2: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA: violet; 12; anche qui le due variabili si trovano all'interno di uno scope globale e vengono dunque lette dai rispettivi richiami

var favColour = "violet"; let monthsInAYear = 12;

if (true) { var favColour = "violet"; console.log("Il mio colore preferito è:", favColour); }

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA: non si ha una corrispondenza su console.log perchè la funzione non viene richiamata

function makePizza(moreIngredients) { 
    let theSecond = "Sugo di pomodoro freschissimo"; // { ... } console.log(theSecond + ", " + moreIngredients); return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) }

    if (true) { 
        makePizza("rucola, prosciutto crudo e scaglie di grana."); console.log("Il secondo ingrediente necessario: ", theSecond); }

    
};

