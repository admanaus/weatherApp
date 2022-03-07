import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private weatherService: GetWeatherService) { }

  ngOnInit(): void {
  }

  value = 'Zipcode';
  days = 4;

  getWeather(){

    let lat: number = 0;
    let lon: number = 0;
    this.weatherService.getGeoCode(this.value).subscribe((res: any) => {

      lat = res.lat;
      lon = res.lon;

    })
    this.weatherService.getForecastService(lat, lon, this.days).subscribe(result => {console.log(result)})

  }

}
