import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getFormacions() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/formacions";
    return this.http.get(URL, {headers:headers});
    
  }

  getFormacion(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/formacions/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

}
