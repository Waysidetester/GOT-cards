const utilitesExporter = () => {
    console.log("util.js linked");
};

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

export default {utilitesExporter, printToDom};