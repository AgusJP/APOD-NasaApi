import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { find, switchMap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Apod } from '../../interfaces/apod.interface';


@Injectable({
  providedIn: 'root'
})
export class NasaAPODService {

  apodsData$: BehaviorSubject<Apod[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  firstTimeGetApods(start_date: string, end_date: string): Observable<Apod[]> {
    return this.http.get<Apod[]>(`${environment.base_url}start_date=${start_date}&end_date=${end_date}&api_key=${environment.api_key}`);
  }

  getApodByDate(date:string): Observable<Apod>{
    return this.apodsData$.pipe(
      switchMap(data => from<any>(data)),
      find((apod:Apod) => apod.date == date)
    )
  }

  get Apods(): Observable<Apod[]> {
    return this.apodsData$.asObservable()
  }

  setApods(data) {
    this.apodsData$.next(data)
  }
  
}
