/* CITAZIONI */ 

const quotations = [
 /*0*/   "Io sono tuo padre!",
 /*1*/ "guerra nessuno fatto grande",
 /*2*/ "fare o non fare... non c'è provare",
 /*3*/ "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
 /*4*/ "Sto più in alto di te!",
 /*5*/ ".... (cit. Darth Maul)",
 /*6*/ "Eri come un fratello per me! (pianto)",
 /*7*/ "Mi comincia giurno maxi okeyday, con buena pappa a colassione, poi bum! Maxi parura, e addosso a me Jedi, e pah! Mi aqui.",
    ];

  const p = document.querySelector("#quotations");

  document.querySelector("button").addEventListener("click", () => {
      const randomQuote = Math.floor(Math.random() * 8);
      p.innerHTML = (quotations[randomQuote]);

    });

