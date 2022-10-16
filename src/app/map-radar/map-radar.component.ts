import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-radar',
  templateUrl: './map-radar.component.html',
  styleUrls: ['./map-radar.component.scss'],
})
export class MapRadarComponent {
  // Define our base layers so we can reference them multiple times
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

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.stamenTonerBasemap],
    zoom: 7,
    center: latLng([58.65, 25.06]),
  };
}
