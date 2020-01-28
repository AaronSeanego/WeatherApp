import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  info;
  city = "Pretoria"
  temp;
  min;
  max;
  search;
  constructor(public weatherService:WeatherService) {
    this.weatherService.getData(this.city).subscribe((data) => {
      this.info = data;
      console.log(this.info);

      /* Below code is for coverting kelvin temperature to celsius*/
      this.temp = Math.round(this.info.main.temp - 273.25);
      this.min = Math.round(this.info.main.temp_min - 273.25);
      this.max = Math.round(this.info.main.temp_max - 273.25);
    })
    
  }

  searchData() {
    this.weatherService.getData(this.search).subscribe((data) => {
      this.info = data;
      console.log(this.info);

      /* Below code is for coverting kelvin temperature to celsius*/
      this.temp = Math.round(this.info.main.temp - 273.25);
      this.min = Math.round(this.info.main.temp_min - 273.25);
      this.max = Math.round(this.info.main.temp_max - 273.25);
    })
  }

  ClearData() {
    this.search = "";
  }

  
}
