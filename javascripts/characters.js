import utilities from './helpers/util.js';
import details from './details.js';

let charachters = [];

const cardBuilder = (characterArray) => {
    let newString = `<button id="allChar">All</button>
                    <button id="stark">Stark</button>`;
    for (let i = 0; i < characterArray.length; i++) {
        newString += `  <div class="card all-cards" id="${characterArray[i].id}">
                            <img class="card-img-top" src="${characterArray[i].imgUrl}" alt="${characterArray[i].name}">
                            <div class="card-body">
                                <h5 class="card-title">${characterArray[i].name}</h5>
                            </div>
                        </div>`
    }
    utilities.printToDom('contentHere', newString);
    createEvents();
};

const exportCharacterz = () => {
    return charachters;
}

const setCharacters = (newArray) => {
    charachters = newArray;
};

const createEvents = () => {
    const cardArray = document.getElementsByClassName('card');
    for (let i = 0; i <cardArray.length; i++) {
        cardArray[i].addEventListener('click', (e) => {
            let cardId = e.currentTarget.id;
            details.detailBuilder(charachters.find( (element) => {
                return (element.id === cardId);
            }));
        })
    }
};

export default {cardBuilder, createEvents, exportCharacterz, setCharacters};