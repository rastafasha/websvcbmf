import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Subcriptores } from './registros';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {

  ServerUrl = environment.apiUrl;
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private http: HttpClient;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }


  contactForm(formdata: Contact) {
    return this.http.post<Contact>(this.ServerUrl + 'api_contact/contact', formdata, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  registroForm(formdata: Subcriptores) {
    return this.http.post<Subcriptores>(this.ServerUrl + 'api_contact/subcritore', formdata, this.httpOptions)
    .pipe(
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
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
