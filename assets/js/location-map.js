
/*
// Initialize and add the map
function initMap() {
  // The location of Rudnik nad Sanem
  var company = {lat: 50.4389285, lng: 22.2623249};
  // The map, centered at Rudnik nad Sanem
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: company});
  // The marker, positioned at Rudnik nad Sanem
  var marker = new google.maps.Marker({position: company, map: map});
}
*/

function initMap(){
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(pos) {
    var company = {lat: 50.4389285, lng: 22.2623249};
    latitud = company.lat
    longitud = company.lng 
    document.getElementById("latitud").innerHTML = latitud 
    document.getElementById("longitud").innerHTML = longitud 
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: latitud, lng: longitud},
        zoom: 4
    });
};