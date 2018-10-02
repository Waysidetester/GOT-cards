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
        imgUrl: 'https://www.euruni.edu/blog/wp-content/uploads/2015/07/Jon-Snow-4.jpg',
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

export default charachtersExporter;