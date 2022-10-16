import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapRadarComponent } from './map-radar/map-radar.component';
import { MapComponent } from './map/map.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  { path: 'shipping', component: Page1Component },
  { path: 'map', component: MapComponent },
  { path: 'map-radar', component: MapRadarComponent },
  { path: 'ng-template', component: NgTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
