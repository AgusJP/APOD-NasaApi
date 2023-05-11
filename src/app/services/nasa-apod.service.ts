import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { find, switchMap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Apod } from '../interfaces/apod.interface';


@Injectable({
  providedIn: 'root'
})
export class NasaAPODService {

  apodsData: BehaviorSubject<Apod> = new BehaviorSubject<Apod>(null);

  constructor(private http: HttpClient) {}

  firstTimeGetApods(start_date: string, end_date: string): Observable<Apod> {
    return this.http.get<Apod>(`${environment.base_url}start_date=${start_date}&end_date=${end_date}&api_key=${environment.api_key}`);
  }

  getApodByDate(date:string) {
    return this.apodsData.pipe(
      switchMap(data => from<any>(data)),
      find((apod:Apod) => apod.date == date)
    )
    //NOTA: Aqui si la petición la meto en un observable al cargar el servicio, podria buscar por fecha
    // y no tener que sobrecargar la api 
    return this.http.get<Apod>(`${environment.base_url}date=${date}&api_key=${environment.api_key}`)
  }

  getApods() {
    return of(this.apodsData)
  }

  setApods(data:Apod) {
    console.log(data)
    this.apodsData.next(data)
  }
  
}
