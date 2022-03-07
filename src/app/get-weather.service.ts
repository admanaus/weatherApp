import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationResponse } from './data/location-response';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private _http: HttpClient) { }

  apiKey: string = "cc8ef8e5c209d938ab3801daa42b5e31";

  getWeatherService(zipcode: string){
    let url: string = "http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
    return this._http.get(url);
  }

  getForecastService(lat: number, lon: number, days: number){

      const url = "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+ lat +"&lon="+lon+"&cnt="+ days +"&appid=cc8ef8e5c209d938ab3801daa42b5e31";
      return this._http.get(url);
  }

  getGeoCode(zipcode: string){
    let url: string = "http://api.openweathermap.org/geo/1.0/zip?zip="+zipcode+"&appid=" + this.apiKey;
    return this._http.get(url);
  }

}
