import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherData>{
    return this.http.get<WeatherData>(`https://open-weather13.p.rapidapi.com/city/${cityName}`, {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key', '0e67b16e19msh992cac87ff34ac8p1d3410jsnd3dc4f2fabff'),
      params: new HttpParams()
    })

  }
}
