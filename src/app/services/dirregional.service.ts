
import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AccountService } from './account.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirregionalService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }

  getDirRegionals() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/dirregional";
    return this.http.get(URL, {headers:headers});
    
  }

  getDirRegional(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/dirregional/show/"+id;
    return this.http.get(URL,{headers:headers});
  }


  createDirRegional(data:any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/dirregional/store/";
    return this.http.post(URL,data,{headers:headers});
    
  }

  updateDirRegional(data:any, id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/dirregional/update/"+id;
    return this.http.post(URL,data,{headers:headers});
  }

  deleteDirRegional(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/dirregional/destroy/"+id;
    return this.http.delete(URL, {headers:headers});
    
  }
}
