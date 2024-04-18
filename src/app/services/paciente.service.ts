import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getPacientes() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/areapaciente";
    return this.http.get(URL, {headers:headers});
    
  }

  getPaciente(id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/areapaciente/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  getRecentPacientes() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/areapaciente/";
    return this.http.get(URL, {headers:headers});
    
  }

 
}
