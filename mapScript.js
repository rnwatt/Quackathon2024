//Sets options for the map on creation
var mapOptions = {
    center: [54.78, -4],
    zoom: 5.5
}

//creates map
var map = new L.map("map", mapOptions);
var marker = undefined;
var layer = new
L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
map.addLayer(layer);
var markersArray = [];
var radius = 10;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function changeRadius(){
    rangeElement = document.getElementById("radius");
    radius = rangeElement.value;
}
