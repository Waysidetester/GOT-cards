import utilities from "./helpers/util.js";
import characters from "./characters.js"

const detailsExporter = () => {
    console.log("details.js linked");
};

const detailBuilder = (object) => {
    let newString =`<div class="card" id="${object.id}">
                        <button class="btn btn-danger"id="close" type="button">X</button>
                        <img class="card-img-top" src="${object.imgUrl}" alt="${object.name}">
                        <div class="card-body">
                            <h5 class="card-title">${object.name}</h5>
                            <p>${object.house}</p>
                        </div>
                    </div>`
    utilities.printToDom('contentHere', newString);
    closer();
};

const closer = () => {
    document.getElementById('close').addEventListener('click', characters.cardBuilder);
};

export default {detailsExporter, detailBuilder};