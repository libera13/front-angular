import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://opensky-network.org/api/states/all?time=1458564121&icao24=3c6444'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  state!: Observable<{ time: string }>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.state =  this.getShippingPrices()
    console.log(this.state);
    
  }

  getShippingPrices() {
    return this.http.get<{time: string}>(url);
  }
}
