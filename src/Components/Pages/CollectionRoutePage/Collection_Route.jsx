import React from 'react'
import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react';
import './Collection_Route.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Collection_Route = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHVidWR1OThjb2RlciIsImEiOiJjbHJ5eThubGIxbGtiMnFvNnd1ZXY3OHg4In0.rFPGcp_AC5CJ3nGQNCmOEg';

    const bin1 = [80.574495,5.937782];
    const bin2 = [80.572352,5.941286];

    if (!document.getElementById('map')) {
      console.error("Container 'map' not found.");
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/pubudu98coder/clrz8ttrc00sq01plfgfjgpi8',//mapbox://styles/pubudu98coder/clrz8ttrc00sq01plfgfjgpi8
      center: bin1,
      zoom: 20
    });
    const bin1PopUp = document.createElement('div');
    bin1PopUp.innerHTML = '<h2>Garbage Bin 01</h2><ul><li>Fill Level: 10% </li><li>Status: Collected </li></ul>'
const bin2PopUp = document.createElement('div');
bin2PopUp.innerHTML = '<h2>Garbage Bin 02</h2><ul><li>Fill Level: 50% </li><li>Status: Not Collected </li></ul>'

    // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    //   'Garbage Bin 01'                                
        const popup1 = new mapboxgl.Popup({ offset: 25 }).setDOMContent(bin1PopUp
    );
    const popup2 = new mapboxgl.Popup({ offset: 25 }).setDOMContent(bin2PopUp
      
    );

    const el1 = document.createElement('div');
    el1.id = 'marker';
    const el2 = document.createElement('div');
    el2.id = 'marker';

    new mapboxgl.Marker(el1)
      .setLngLat(bin1)
      .setPopup(popup1)
      .addTo(map);

      new mapboxgl.Marker(el2)
      .setLngLat(bin2)
      .setPopup(popup2)
      .addTo(map);


    return () => map.remove();
  }, []); 

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
      <div id="map" style={{ height: '100%' }}></div>
     
    </div>
  );
};

export default Collection_Route;
