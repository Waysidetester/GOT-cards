function executeThisCodeAfterFileLoaded () {
    console.log('request', this);
}

function executeThisCodeIfXHRFails () {
    console.log('stuff broke');
}

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open('GET', './database/characters.json') //what request are you making?
    myRequest.send();
};

export default getCharacters;