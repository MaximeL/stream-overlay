import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor(private http: HttpClient) { }

  getMusicNow(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${environment.serverUrl}/music/now`).pipe(
        catchError( (err, caught) => {
          console.error(`Error : [GET] ${environment.serverUrl}/music/now`);
          console.error(err);
          return of({ value: '' });
      })
    );
  }

  getLastFollow(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${environment.serverUrl}/follow/last`).pipe(
        catchError( (err, caught) => {
            console.error(`Error : [GET] ${environment.serverUrl}/follow/last`);
            console.error(err);
            return of({ value: '' });
        })
    );
  }
}
