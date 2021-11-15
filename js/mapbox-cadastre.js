
  //Añadir vuestor token y/o estilo !!
  var map;
  function init() {
      mapboxgl.accessToken =
          'pk.eyJ1IjoianVhbnJ1Z2FyIiwiYSI6ImNranlpd2lqbzB5djQydW1sZTRvem9tdmgifQ.zvNvGIYji6wVpwjlnTHeJg';
      map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/dark-v10',
          center: [2.16859, 41.3954],
          zoom: 15,
          attributionControl: false,
          pitch: 45,
          hash: true
      });

      map.addControl(new mapboxgl.AttributionControl({ compact: true }));
      map.addControl(new mapboxgl.NavigationControl());

      map.addControl(
          new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          collapsed: true,
          bbox:[2.1066, 41.3000, 2.2536, 41.4468], //bounding box option
          placeholder: "Buscar"
          }));
  
      map.on('load', function () {

          addEdificiosCapa();

          addPopupToMapEdificios("edificios");

          
       }); //fin onload

  } // final init