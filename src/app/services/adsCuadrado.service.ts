import { Injectable } from '@angular/core';
import { Bancuadrado } from '../models/ads-cuadrado';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BancuadradoService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getBancuadrados() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/bancuadrados";
    return this.http.get(URL, {headers:headers});
    
  }
  getBancuadradosActivos() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/bancuadrados/activos";
    return this.http.get(URL, {headers:headers});
    
  }

  getBancuadrado(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/bancuadrados/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  


}
