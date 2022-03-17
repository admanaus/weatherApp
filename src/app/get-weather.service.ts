import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {WeatherDay} from "./weather-day";
import {WeatherData} from "./weather-data";

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private _http: HttpClient) { }

  apiKey: string = "cc8ef8e5c209d938ab3801daa42b5e31";

  getCurrentWeather(zipcode: string){
    let url: string = "http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
    return this._http.get(url);
  }

  getForecastService(lat: number, lon: number, days: number){

      const url = "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+ lat +"&lon="+lon+"&cnt="+ days +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
      return this._http.get(url).pipe(
        map((res: any )=> {
          let days: WeatherDay[] = [];
          res.list.forEach((element: any) => {
            days.push({
              icon: element.weather[0].icon,
              dayTimeTemp: element.temp.day,
              minTemp: element.temp.min,
              maxTemp: element.temp.max,
              weatherDescription: element.weather[0].description,
              windSpeed: element.speed
            } as WeatherDay)
          });
          return {
            cityName: res.city.name,
            days: days
          } as WeatherData
        }));
  }

  getGeoCode(zipcode: string){
    let url: string = "http://api.openweathermap.org/geo/1.0/zip?zip="+zipcode+"&appid=" + this.apiKey;
    return this._http.get(url);
  }

}
