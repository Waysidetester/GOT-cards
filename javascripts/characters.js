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
        name: 'some name',
        imgUrl: 'link to image',
        house:'home is where the heart is',
        id: 'character0'
    },
    {
        name: 'other name',
        imgUrl: 'new link to image',
        house:'different house',
        id: 'character1'
    },
    {
        name: 'new name',
        imgUrl: 'random image',
        house:'gryfindor',
        id: 'character2'
    },
    {
        name: 'no name',
        imgUrl: 'specific image',
        house:'cribs',
        id: 'character 3'
    }
];

export default charachtersExporter;