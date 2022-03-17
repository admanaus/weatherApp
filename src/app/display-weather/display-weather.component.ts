import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor() { }

  @Input() response: WeatherData;


  ngOnInit(): void {

  }

}
