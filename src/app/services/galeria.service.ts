import { Injectable } from '@angular/core';
import { Galeria } from '../models/galeria';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  
  getGalerias() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/galeria";
    return this.http.get(URL, {headers:headers});
    
  }

  getGaleria(id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/galeria/show/"+id;
    return this.http.get(URL,{headers:headers});
  }
  

}
