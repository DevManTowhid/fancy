import { createMap } from './map.js';

function initializeMap() {


const map = createMap();

console.log('Map created:', map);

return map;

}



document.addEventListener('DOMContentLoaded', () => {

    const map = initializeMap();
});