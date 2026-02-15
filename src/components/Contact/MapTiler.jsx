import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { defaults as defaultControls } from 'ol/control/defaults.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';
import { apply } from 'ol-mapbox-style';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { Icon, Style } from 'ol/style.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';

const MapTiler = () => {
  // 1. Create a reference to the DOM element where the map will be rendered
  const mapRef = useRef(null);

  // 2. Use useEffect to run the map initialization after the component mounts
  useEffect(() => {
    if (!mapRef.current) return;

    const key = import.meta.env.VITE_MAP_KEY;
    const styleJson = `https://api.maptiler.com/maps/hybrid-v4/style.json?key=${key}`;

    const collegeCoords = [77.2843364, 28.2760507];

    const map = new Map({
      // 3. Bind the map to the React ref instead of a hardcoded string ID
      target: mapRef.current, 
      controls: defaultControls({attribution: false}),
      view: new View({
        constrainResolution: true,
        center: fromLonLat(collegeCoords),
        zoom: 14
      })
    });

    // marker
    const markerFeature = new Feature({
      geometry: new Point(fromLonLat(collegeCoords))
    });

    // style marker
    markerFeature.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'
        }),
      })
    );

    // create vector layer
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeature],
      }),
    });

    apply(map, styleJson).then(()=>{
      map.addLayer(markerLayer);
    });

    // 4. Cleanup function: Destroys the map instance when the component unmounts
    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height: '100%' }} 
      className="map-container"
    />
  );
};

export default MapTiler;