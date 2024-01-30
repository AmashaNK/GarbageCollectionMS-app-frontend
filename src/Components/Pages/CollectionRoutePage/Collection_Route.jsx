import React from 'react'
import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react';
import './Collection_Route.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Collection_Route = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHVidWR1OThjb2RlciIsImEiOiJjbHJ5eThubGIxbGtiMnFvNnd1ZXY3OHg4In0.rFPGcp_AC5CJ3nGQNCmOEg';

    const bin = [80.574495,5.937782];

    if (!document.getElementById('map')) {
      console.error("Container 'map' not found.");
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: bin,
      zoom: 15
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Garbage Bin 01'
    );

    const el = document.createElement('div');
    el.id = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(bin)
      .setPopup(popup)
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
