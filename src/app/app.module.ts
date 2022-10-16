import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { MapRadarComponent } from './map-radar/map-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    MapComponent,
    NgTemplateComponent,
    MapRadarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LeafletModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
