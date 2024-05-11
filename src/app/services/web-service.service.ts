import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  private url = `https://data.uspreventiveservicestaskforce.org/api/json?key=${environment.apiKey}`;

  constructor(private http: HttpClient) { }

  getRecData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}