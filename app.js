import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"

const mapbox_token = "pk.eyJ1IjoiYnNhbmQ4ODEzIiwiYSI6ImNrYXl1YTRuMTAxZGQzM252azZkdTU4MXEifQ.7LO_4n15lh9NSdbqAKD3dA";

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
zoom : 4.0,
center : [122.90,-1.2]
});


fetch("https://corona.lmao.ninja/v2/countries")
 .then(response => {
   return response.json();
 })
 .then(responseJson => {
   responseJson.forEach(element => {
       const {country, active} = element;
       console.log(country, active);
   });
 })
 .catch(error => {
   console.log(error);
 });