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
    petsArray.forEach((pet) => {
    domString += `<div class="card pet pet-card border-secondary mb-3 pet" id="iJustNeedSomeSpace" style="max-width: 18rem;">`;
    domString +=    `<div class="card-header text-center border-secondary" id="petName">${pet.name}</div>`;
    domString +=    `<div class="card-body text-secondary">`;
    domString +=        `<div class="container image-container">`;
    domString +=            `<img class="card-img" id="image" src="${pet.imageUrl}" alt="${pet.name}">`;
    domString +=        `</div>`;
    domString +=        `<p class="card-title text-center" id="petWords">${pet.color}</p>`;
    domString +=        `<p class="card-text text-center" id="petWords">${pet.specialSkill}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-footer text-center text-capitalize border-secondary ${pet.type}">${pet.type}</div>`;
    domString += `</div>`;
    })
    printToDom(domString)
    };

export {petsBuilder, setPets, getPetz, sortPets}