import {printToDom} from '../helpers/util.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        petsBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    }
};

const petsBuilder = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {
        domString += `<div class="card pet pet-card border-secondary mb-3 pet" id="iJustNeedSomeSpace" style="max-width: 18rem;">`;
        domString +=    `<div class="card-header text-center border-secondary" id="petName">${petsArray[i].name}</div>`;
        domString +=    `<div class="card-body text-secondary">`;
        domString +=        `<div class="container image-container">`;
        domString +=            `<img class="card-img" id="image" src="${petsArray[i].imageUrl}" alt="${petsArray[i].name}">`;
        domString +=        `</div>`;
        domString +=        `<p class="card-title text-center" id="petWords">${petsArray[i].color}</p>`;
        domString +=        `<p class="card-text text-center" id="petWords">${petsArray[i].specialSkill}</p>`;
        domString +=    `</div>`;
        domString +=    `<div class="card-footer text-center text-capitalize border-secondary ${petsArray[i].type}">${petsArray[i].type}</div>`;
        domString += `</div>`;
    }
    printToDom(domString)
};

export {petsBuilder, setPets, getPetz, sortPets}