import React, { useEffect } from 'react';

import { latLng } from 'mock/coordinates';
import { GOOGLE_API_KEY } from 'constants/mapAPI';
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

interface coordinates {
  lat: number;
  lng: number;
}

function Map() {
  useEffect(() => {
    function initMap(): void {
      const latArr: number[] = [];
      const lngArr: number[] = [];

      latLng.forEach((coordinates) => {
        latArr.push(coordinates.lat);
        lngArr.push(coordinates.lng);
      });
      const minLat: number = Math.min(...latArr);
      const maxLat: number = Math.max(...latArr);
      const minLng: number = Math.min(...lngArr);
      const maxLng: number = Math.max(...lngArr);
      const centerLat = (minLat + maxLat) / 2;
      const centerLng = (minLng + maxLng) / 2;

      const centerCoor: coordinates = {
        lat: centerLat,
        lng: centerLng,
      };

      function setZoomLvl() {
        const leftBottom: coordinates = {
          lat: minLat,
          lng: minLng,
        };
        const leftTop: coordinates = {
          lat: maxLat,
          lng: minLng,
        };
        const rightTop: coordinates = {
          lat: maxLat,
          lng: maxLng,
        };
        const height = google.maps.geometry.spherical.computeDistanceBetween(leftBottom, leftTop);
        const width = google.maps.geometry.spherical.computeDistanceBetween(leftTop, rightTop) * 1.38;

        const longerDistance = Math.max(width, height);

        let zoomfactor = 1;
        if (longerDistance < 1128) {
          zoomfactor = 17;
        }
        if (longerDistance > 1128) {
          zoomfactor = 16;
        }
        if (longerDistance > 2256) {
          zoomfactor = 15;
        }
        if (longerDistance > 4513) {
          zoomfactor = 14;
        }
        if (longerDistance > 9027) {
          zoomfactor = 13;
        }
        if (longerDistance > 18055) {
          zoomfactor = 12;
        }
        if (longerDistance > 3611) {
          zoomfactor = 11;
        }
        if (longerDistance > 72223) {
          zoomfactor = 10;
        }
        if (longerDistance > 144447) {
          zoomfactor = 9;
        }
        if (longerDistance > 288895) {
          zoomfactor = 8;
        }
        if (longerDistance > 577790) {
          zoomfactor = 7;
        }
        if (longerDistance > 1155581) {
          zoomfactor = 6;
        }
        if (longerDistance > 2311162) {
          zoomfactor = 4.5;
        }
        if (longerDistance > 4622324) {
          zoomfactor = 3;
        }
        if (longerDistance > 9244649) {
          zoomfactor = 2;
        }
        if (longerDistance > 18489298) {
          zoomfactor = 1;
        }
        console.log(zoomfactor);
        return zoomfactor;
      }

      const map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoor,
        zoom: setZoomLvl(),
      });

      latLng.forEach((coordinates) => {
        const marker = new google.maps.Marker({
          position: coordinates,
          map,
        });
      });
    }
    window.initMap = initMap;
    initMap();
  }, []);

  return (
    <MapWrapper>
      <SearchMap id="map" />
    </MapWrapper>
  );
}

export default Map;
