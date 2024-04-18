import { Injectable } from '@angular/core';
import { Revista } from '../models/revista';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getRevistas() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/revistas";
    return this.http.get(URL, {headers:headers});
    
  }

  getRevista(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/revistas/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  

}
