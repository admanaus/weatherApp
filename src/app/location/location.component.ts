import { Component, OnInit, SimpleChanges } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private weatherService: GetWeatherService) { }

  zipcode = '';
  days = 4;
  response:any;

  ngOnInit(): void {
  }

  getWeather(){

    this.weatherService.getCurrentWeather(this.zipcode).subscribe(res => {
      this.response = res;
    })

  }
}
