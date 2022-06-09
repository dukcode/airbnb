/* eslint-disable react/no-this-in-sfc */
import React, { useContext, useEffect } from 'react';

import { latLng } from 'mock/coordinates';
import { Context } from 'components/context/ModalContext';
import { moneyToWon } from 'utils/utils';
import { MapWrapper, SearchMap } from './Map.style';

type GoogleGeoCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

declare let google: any;

declare global {
  interface Window {
    initMap: () => void;
  }
}

function Map() {
  const { filteredData } = useContext(Context);
  useEffect(() => {
    function initMap(): void {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {});
      const markers: any[] = [];

      filteredData.forEach((coordinates) => {
        const marker = new google.maps.Marker({
          position: { lat: coordinates.longitude, lng: coordinates.latitude },
          map,
          icon: {
            path: 'M-40 -20 H 48 L 49 -19 L 50 -18 V 18 L 49 19 L 48 20 H -38 L -39 19 L -40 18 L -40 -18 L -39 -19 z',
            fillColor: 'white',
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 1,
            fillOpacity: 1.0,
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          label: {
            color: '#333333',
            fontWeight: '600',
            fontSize: '15px',
            text: `${moneyToWon(coordinates.allAmount)}`,
            backgroundColor: 'white',
          },
        });
        markers.push(marker);
      });

      const bounds = new google.maps.LatLngBounds();

      for (let i = 0; i < markers.length; i += 1) {
        bounds.extend(markers[i].getPosition());
      }
      map.fitBounds(bounds);
    }
    window.initMap = initMap;
    initMap();
  }, [filteredData]);

  return (
    <MapWrapper>
      <SearchMap id="map" />
    </MapWrapper>
  );
}

export default Map;
