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

  getWeather(){

    this.weatherService.getWeatherService(this.value).subscribe(result => {console.log(result)})

  }

}
