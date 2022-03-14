import { Component, OnInit, SimpleChanges } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private weatherService: GetWeatherService) { }

  zipcode = '84097';
  response:any;

  ngOnInit(): void {
  }

  getWeather(){

    this.weatherService.getCurrentWeather(this.zipcode).subscribe(res => {
      this.response = res;
    })

  }
}
