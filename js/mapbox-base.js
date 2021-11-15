
        //Añadir vuestor token y vuestro estilo
        function init() {
            mapboxgl.accessToken =
                'pk.eyJ1IjoianVhbnJ1Z2FyIiwiYSI6ImNranlpd2lqbzB5djQydW1sZTRvem9tdmgifQ.zvNvGIYji6wVpwjlnTHeJg';
            var map = new mapboxgl.Map({
                container: 'map',
                //style: 'mapbox://styles/mapbox/outdoors-v11',
                style: 'mapbox://styles/juanrugar/ckjyk4vjl1v6e17s4jhhf1jql',
                center: [2.16859, 41.3954], // Barna
                // center: [-0.37918, 39.4741], //Valencia
                zoom: 13,
                attributionControl: false,
                hash: true
            });
            //controls
            map.addControl(new mapboxgl.AttributionControl({ compact: true }));
            map.addControl(new mapboxgl.NavigationControl());

            map.on('load', function () {
                map.addSource("viasciclables_source", {
                    type: "vector",
                    url: "mapbox://juanrugar.41e78yl7" //poner mapbox://vuestro id
                }); //fin map source

                map.addLayer({
                    id: "viasciclables",
                    type: "line",
                    source: "viasciclables_source",
                    'source-layer': "vias_ciclables-8eaauu", //poner vuestro titulo capa
                    paint: {
                        'line-color': "#00ff00",
                        "line-width": 3
                    }
                });

                map.on('click', 'viasciclables', function (e) {

                    var text = "";
                   // console.info(e); // similar al console.log()
                    //console.log(e.features[0]);
                    for (key in e.features[0].properties) {

                        text += "<b>" + key + "</b>:" + e.features[0].properties[key] + "<br>";
                    }
                    new mapboxgl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(text)
                        .addTo(map);

                });

                map.on('mouseenter', 'viasciclables', function () {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', 'viasciclables', function () {
                    map.getCanvas().style.cursor = '';
                });
            });



        } //End of init()
    