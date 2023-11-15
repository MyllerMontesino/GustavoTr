// Inicializa el mapa
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation no es soportada en este navegador");
    }
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Crea el mapa usando Leaflet
    const map = L.map("map").setView([8.944298,-75.4327911], 15);

    // Añade una capa de mapa de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Añade un marcador en la ubicación actual
    L.marker([8.944298,-75.4327911]).addTo(map).bindPopup('Nos encontramos <b> AQUÍ </b>').openPopup();
}

function error() {
    alert("No se puede recibir la ubicación");
}

// Llama a la función initMap cuando la página se carga
document.addEventListener("DOMContentLoaded", initMap);
