import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { marker, divIcon, Map, tileLayer, latLng } from 'leaflet';
import 'leaflet-realtime';
import { States } from './types';

const url = 'http://127.0.0.1:5000/flightradar';

@Component({
  selector: 'app-map-radar',
  templateUrl: './map-radar.component.html',
  styleUrls: ['./map-radar.component.scss'],
})
export class MapRadarComponent {
  map?: Map;
  constructor(private http: HttpClient) {}

  stamenTonerBasemap = tileLayer(
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">' +
        'Stamen Design</a>, under' +
        '<a href="http://creativecommons.org/licenses/by/3.0">' +
        'CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">' +
        'OpenStreetMap</a>, under' +
        '<a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    }
  );

  options = {
    layers: [this.stamenTonerBasemap],
    zoom: 7,
    center: latLng([58.65, 25.06]),
  };

  icon = divIcon({
    className: 'aeroplane',
    iconSize: [10, 10],
  });

  onMapReady(map: Map) {
    this.map = map;
    this.http.get<States>(url).subscribe(geo1 => {
      for (const features of geo1.features) {
        const { latitude, longitude } = features.properties;

        marker([latitude, longitude], {
          icon: this.icon,
        }).addTo(this.map!);
      }
    });
  }
}
