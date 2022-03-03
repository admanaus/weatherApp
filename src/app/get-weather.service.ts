import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private _http: HttpClient) { }

  getWeatherService(zipcode: string){
    let url: string = "http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
    return this._http.get(url);
  }
}
