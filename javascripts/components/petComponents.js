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
    domString += `<div class="d-flex justify-content-around">`
    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="card border-secondary mb-3 pet" style="max-width: 18rem;">`;
        domString +=    `<div class="card-header bg-light text-center border-secondary" id="petName">${pets[i].name}</div>`;
        domString +=    `<div class="card-body text-secondary">`;
        domString +=        `<div class="container image-container">`;
        domString +=            `<img class="card-img" id="image" src="${pets[i].imageUrl}" alt="${pets[i].name}">`;
        domString +=        `</div>`;
        domString +=        `<p class="card-title text-center" id="petWords">${pets[i].color}</p>`;
        domString +=        `<p class="card-text text-center" id="petWords">${pets[i].specialSkill}</p>`;
        domString +=    `</div>`;
        domString +=    `<div class="card-footer text-center bg-transparent border-secondary">${pets[i].type}</div>`;
        domString += `</div>`;
    }
    domString += `</div>`;
    printToDom(domString)
};

export {petsBuilder, setPets, getPetz}

