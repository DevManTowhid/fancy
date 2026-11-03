
export function createMap() {

    // Regional boundaries: Yemen + KSA + neighboring region
    const mapBounds = [
        [10.0, 34.0],
        [33.5, 60.5]
    ];

    const bounds = L.latLngBounds(mapBounds);

    // Initialize map
    const map = L.map("map", {
        zoomControl: true,
        preferCanvas: true,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        minZoom: 4,
        maxZoom: 18,
        worldCopyJump: false
    });

    // Satellite imagery
    const satelliteLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles © Esri",
            maxZoom: 18
        }
    );

    satelliteLayer.addTo(map);

    // Geographic labels and boundaries
    const labelsLayer = L.tileLayer(
        "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Labels © Esri",
            maxZoom: 18,
            pane: "overlayPane"
        }
    );

    labelsLayer.addTo(map);

    // Set regional view
    map.fitBounds(bounds, {
        padding: [20, 20]
    });

    // Prevent zooming out beyond the initial regional view
    map.setMinZoom(map.getZoom());

    // Keep view inside regional boundaries
    map.setMaxBounds(bounds);

    return map;
}
