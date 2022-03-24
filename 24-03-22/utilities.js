/* CARD ELEMENTS */
const makeCard = (id, title, imageUrl, description, year) => {
    /* VARIABLES */
    const divElem = document.createElement("div");
    const h3Elem = document.createElement("h3");
    const imgElem = document.createElement("img");
    const pDescriptionElem = document.createElement("p");
    const pYearElem = document.createElement("p");
    const xImgElem = document.createElement("img");

    /* CLASSLIST */
    divElem.classList.add("card");
    pDescriptionElem.classList.add("description");
    pYearElem.classList.add("year");
    xImgElem.classList.add("delete");

    /* ATTRIBUTES & CONTENT */
    imgElem.setAttribute("src", imageUrl);
    imgElem.setAttribute("alt", description);

    xImgElem.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f1/Heavy_red_%22x%22.png")
    xImgElem.setAttribute("alt", "Delete");

    h3Elem.textContent = title;
    pDescriptionElem.textContent = description;
    pYearElem.textContent = year;

    /* HTML APPEND & WRAPPER */
    divElem.append(h3Elem, imgElem, pDescriptionElem, pYearElem, xImgElem);
    document.querySelector(".postersWrapper").appendChild(divElem);

    /* DELETE EVENT WITH FETCH */
    xImgElem.addEventListener("click", () => {
        fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }})
            .then (() => location.reload());
    })
};

export {makeCard};