import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../interfaces/apod.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaAPODService {

  api_url = "https://api.nasa.gov/planetary/apod?start_date=2023-04-03&end_date=2023-04-08&api_key=iJ14ZUAK3liAuCtQV4EzTbWUlBesx1pGzMtL8btR"

  constructor(private http: HttpClient) { }

  getApod(startDate: string, endDate: string): Observable<Apod> {
    return this.http.get<Apod>(this.api_url);
  }
  
}
