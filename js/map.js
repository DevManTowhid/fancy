import { CONFIG } from './config.js';
import L from 'leaflet';

export function createMap()
 {const map = L.map('map', {
    zoomControl: true, // Enable zoom control
    preferCanvas: true, // Use canvas rendering for better performance with many markers 
    maxBoundsViscosiry: 0.5, // Prevents the user from panning too far outside the map bounds

});

map.fitBounds(CONFIG.mapBounds, 
    {padding : [50, 50]}
); // Fit the map to the specified bounds


map.setMaxBounds(CONFIG.mapBounds); // Set the maximum bounds for the map


 // Add satellite imagery
    L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles © Esri",
            maxZoom: 19
        }
    ).addTo(map);

    return map;
}