const mapboxgl =require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGluZ2FsbW9uZHoiLCJhIjoiY2t3ZzZlYnlwMGxlcTJ1cXZ3cDM1ZDZ5ZCJ9.LTpVQRAL-OhcTw1lgQlgJg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});