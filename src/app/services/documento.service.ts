import { Injectable } from '@angular/core';
import { Documento } from '../models/documentos';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getDocumentos() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/documento";
    return this.http.get(URL, {headers:headers});
    
  }

  getDocumento(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/documento/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  
}
