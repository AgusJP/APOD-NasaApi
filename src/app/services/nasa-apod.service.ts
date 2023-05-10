import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../interfaces/apod.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaAPODService {

  constructor(private http: HttpClient) { }

  getApods(start_date: string, end_date: string): Observable<Apod> {
    return this.http.get<Apod>(`${environment.base_url}start_date=${start_date}&end_date=${end_date}&api_key=${environment.api_key}`);
  }

  getApodByDate(date:string) {
    //NOTA: Aqui si la petición la meto en un observable al cargar el servicio, podria buscar por fecha
    // y no tener que sobrecargar la api 
    return this.http.get<Apod>(`${environment.base_url}date=${date}&api_key=${environment.api_key}`)
  }
  
}
