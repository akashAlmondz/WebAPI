// const mapboxgl=require('mapbox-gl');

// 	mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGluZ2FsbW9uZHoiLCJhIjoiY2t3ZzZlYnlwMGxlcTJ1cXZ3cDM1ZDZ5ZCJ9.LTpVQRAL-OhcTw1lgQlgJg';
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/streets-v11', // style URL
//         center: [77.2664587, 28.5366411], // starting position [lng, lat]
//         zoom: 12 // starting zoom
//     });

//     const draw = new MapboxDraw({
//         displayControlsDefault: false,
//         // Select which mapbox-gl-draw control buttons to add to the map.
//         controls: {
//             polygon: true,
//             trash: true
//         },
//         // Set mapbox-gl-draw to draw by default.
//         // The user does not have to click the polygon control button first.
//         defaultMode: 'draw_polygon'
//     });
//     map.addControl(draw);

//     map.on('draw.create', updateArea);
//     map.on('draw.delete', updateArea);
//     map.on('draw.update', updateArea);
    
    
//     function updateArea(e) {
//         const data = draw.getAll();
//         polyCoord = turf.coordAll(data);
//         console.log("hello testing data")
//         const answer = document.querySelector('#calculated-area');
//         if (data.features.length > 0) {
//             const area = turf.area(data);
//             let centroid = turf.centroid(data);
//             var center = [centroid.geometry.coordinates[1],centroid.geometry.coordinates[0]];
       



//             // Restrict the area to 2 decimal points.
//             const rounded_area = Math.round(area * 100) / 100;
//             answer.innerHTML = `<p><strong>Centroid: <br />
//             ${centroid.geometry.coordinates[1]},${centroid.geometry.coordinates[0]}</strong></p>`;
           
            
//         } else {
//             answer.innerHTML = '';
//             if (e.type !== 'draw.delete')
//                 alert('Click the map to draw a polygon.');
//         }

    
//     }
//     module.exports=polyCoord;