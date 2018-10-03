import utilities from './helpers/util.js';
import details from './details.js';

const charachters = [
    
];

const cardBuilder = () => {
    let newString = ``;
    for (let i = 0; i < charachters.length; i++) {
        newString += `  <div class="card all-cards" id="${charachters[i].id}">
                            <img class="card-img-top" src="${charachters[i].imgUrl}" alt="${charachters[i].name}">
                            <div class="card-body">
                                <h5 class="card-title">${charachters[i].name}</h5>
                            </div>
                        </div>`
    }
    utilities.printToDom('contentHere', newString);
    createEvents();
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

export default {cardBuilder, createEvents};