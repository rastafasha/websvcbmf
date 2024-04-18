import { Injectable } from '@angular/core';
import { Banvertical } from '../models/ads-vertical';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BanverticalService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getBanverticals() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/banvertical";
    return this.http.get(URL, {headers:headers});
    
  }

  getBanvertical(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/banvertical/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  

}
