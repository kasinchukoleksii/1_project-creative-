
// <script>\
//       var map;\
//       function initMap() \{\
//         map = new google.maps.Map(document.getElementById('map'), \{\
//           center: \{lat: 50.431782, lng: 30.516382\},\
//           zoom: 8\
//         \});\
//       \}\
//     </script>\
// \
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTjCpSPCnb172T5eFiQm2OisSxYqpstFAIzaSyBTjCpSPCnb172T5eFiQm2OisSxYqpstFY&callback=initMap">
</script>


            function initMap()
            {
              var element = document.getElementById('map');
              var options = {
                zoom: 8,
                center: {lat: 50.431782, lng: 30.516382}
              }
              var myMap = new google.maps.Map(element, options);
            }
