import { Injectable } from '@angular/core';
import { Fotoceo } from '../models/fotoceo';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class FotoceoService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }

  getFotoceos() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/fotoceo";
    return this.http.get(URL, {headers:headers});
  }

  getFotoceo(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/fotoceo/show/"+id;
    return this.http.get(URL,{headers:headers});
  }


}
