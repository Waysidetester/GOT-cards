import utilities from './helpers/util.js';
import details from './details.js';

const charachtersExporter = () => {
    for (let i = 0; i < charachters.length; i++){
        console.log(charachters[i]);
    }
    console.log(charachters.find( (element) => {
        return element.id === 'character2';
    }));
};

const charachters = [
    {
        name: 'John Snow',
        imgUrl: 'http://images6.fanpop.com/image/photos/36800000/Jon-Snow-Season-4-jon-snow-36858109-2832-4256.jpg',
        house:'Stark',
        id: 'character0'
    },
    {
        name: 'Daenerys Targaryen',
        imgUrl: 'http://www.free-largeimages.com/wp-content/uploads/2014/12/Daenerys_targaryen-2.jpg',
        house:'Targaryen',
        id: 'character1'
    },
    {
        name: 'Cersei Lannister',
        imgUrl: 'http://images6.fanpop.com/image/photos/34700000/Cersei-Lannister-cersei-lannister-34778754-2832-4256.jpg',
        house:'Lannister',
        id: 'character2'
    },
    {
        name: 'Tyrion Lannister',
        imgUrl: 'http://images4.fanpop.com/image/photos/23700000/Tyrion-Lannister-game-of-thrones-23767749-600-900.jpg',
        house:'Lannister',
        id: 'character 3'
    }
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

export default {charachtersExporter, cardBuilder, createEvents};