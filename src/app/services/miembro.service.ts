import { Injectable } from '@angular/core';
import { Miembro } from '../models/miembros';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiembroService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMiembros() {
    return this.http.get<Miembro>(this.serverUrl + 'api_miembro/adminMiembros/').pipe(
      catchError(this.handleError)
    );
  }

  getMiembro(id: number) {
    return this.http.get<Miembro>(this.serverUrl + 'api_miembro/adminMiembro/' + id).pipe(
      catchError(this.handleError)
    );
  }

  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
