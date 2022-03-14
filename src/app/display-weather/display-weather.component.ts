import { Component, Input, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor(private weatherService: GetWeatherService) { }

  @Input() response:any;


  ngOnInit(): void {

  }

}
