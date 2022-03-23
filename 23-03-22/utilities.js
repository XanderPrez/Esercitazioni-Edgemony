
/* CARD CREATION AND HTML STRUCTURE */
const makeCard = (title, price, imgUrl, description, category) => {
    const divElem = document.createElement("div"); //div container
    const h3Elem = document.createElement("h3"); // Card's title
    const pElemPrice = document.createElement("p"); // Card's price
    const imgElem = document.createElement("img"); // Card's image
    const pElemDesc = document.createElement("p"); // Card's description
    const pElemCat = document.createElement("p"); // Card's category

    /* ADD CLASSLIST */
    divElem.classList.add("card"); // Adds card.class to container
    pElemPrice.classList.add("priceClass"); // Adds priceClass.class to price
    pElemDesc.classList.add("descriptionClass"); // Adds descriptionClass.class to description
    pElemCat.classList.add("categoryClass"); // Adds categoryClass.class to category

    /* ADD ATTRIBUTES */
    imgElem.setAttribute("src", imgUrl); // Adds attribute source to image with relative parameter
    imgElem.setAttribute("alt", description); // Adds alternative attribute which will show description should img not work

    /* ASSIGN CONTENT TO CONSTANTS */
    h3Elem.textContent = title; // Assign parameters to constants as values (they will get the arguments's value when triggered)
    pElemPrice.textContent = price;
    pElemDesc.textContent = description;
    pElemCat.textContent = category;

    /* ADD TAGS TO CONTAINER */
    divElem.append(h3Elem, pElemPrice, imgElem, pElemDesc, pElemCat);
    document.querySelector(".wrapper").appendChild(divElem); // Adding the container to an HTML div.wrapper creater priorly.

    /* REMOVE CARDS */
    divElem.addEventListener("click", () => divElem.remove()); // Assing event-click to container; on click = remove 
};

/* CUT DESCRIPTION */
const cutDesc = (text) => text.split(" ").slice(0, 12).join(" "); // Constant for keeping text between word 0 to 12 and putting aside the rest

/* FETCH FUNCTION */
const getBeesData = async (URL) => { // The function obtains 2 parameters, url and item which will be switched with the arguments used on the invocation
    const response = await fetch(`${URL}`);

    return await response.json();
};



export {makeCard, getBeesData, cutDesc};