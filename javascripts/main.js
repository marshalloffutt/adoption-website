import {getPets} from "./data/petsData.js";
import {sortEvents} from "./helpers/events.js";

const initializeApp = () => {
    getPets();
    sortEvents();
};

initializeApp();