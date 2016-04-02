// MAP
   var locations = [
          ['Lima', -12.046374, -77.04279339999999],
          ['Machu Piccu', -13.1644902,-72.5463119],
          ['Cusco', -13.53195,-71.96746259999999],
          ['Buenos Aires', -34.6036844,-58.3815591],
          ['Puerto Iguazu', -25.5971635,-54.578599],
          ['Rio de Janiero', -22.9068467, -43.1728965],
      ];

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(-23.3700043,-62.9561472),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }