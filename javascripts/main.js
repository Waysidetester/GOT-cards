import utilities from './helpers/util.js';
import details from './details.js';
import characters from './characters.js';

const init = () => {
    console.log("main.js linked");
    // utilities.utilitesExporter();
    details.detailsExporter();
    characters.cardBuilder();
    // characters.charachtersExporter();
}

init();
