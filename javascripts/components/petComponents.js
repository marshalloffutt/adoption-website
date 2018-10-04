import {printToDom} from '../helpers/util.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petsBuilder = () => {
    let domString = '';
    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="card pet pet-card border-secondary mb-3 pet" id="iJustNeedSomeSpace" style="max-width: 18rem;">`;
        domString +=    `<div class="card-header text-center border-secondary" id="petName">${pets[i].name}</div>`;
        domString +=    `<div class="card-body text-secondary">`;
        domString +=        `<div class="container image-container">`;
        domString +=            `<img class="card-img" id="image" src="${pets[i].imageUrl}" alt="${pets[i].name}">`;
        domString +=        `</div>`;
        domString +=        `<p class="card-title text-center" id="petWords">${pets[i].color}</p>`;
        domString +=        `<p class="card-text text-center" id="petWords">${pets[i].specialSkill}</p>`;
        domString +=    `</div>`;
        domString +=    `<div class="card-footer text-center text-capitalize border-secondary" id="${pets[i].type}">${pets[i].type}</div>`;
        domString += `</div>`;
    }
    printToDom(domString)
};

export {petsBuilder, setPets, getPetz}

