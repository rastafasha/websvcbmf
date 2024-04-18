import { Injectable } from '@angular/core';
import { Banhorizontal } from '../models/ads-horizontal';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BanhorizontalService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }
  getBanhorizontals() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/banhorizontal";
    return this.http.get(URL, {headers:headers});
    
  }

  getBanhorizontal(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/banhorizontal/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

 

}
