import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) {
  }

  getData(name){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + name + ',zar' + '&APPID=400a203220f27c5afc84aeb953a3e893')
  }
}
