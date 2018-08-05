var infoWindow;

function initMap() {
  // The location of Uluru
  var hoboken = {lat: 40.738386, lng: -74.034577};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: hoboken});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: hoboken, map: map});
}
