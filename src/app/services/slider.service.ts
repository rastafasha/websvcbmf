import { Injectable } from '@angular/core';
import { Slider } from '../models/slider';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }


  getSliders() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/sliders";
    return this.http.get(URL, {headers:headers});
    
  }
  getSlidersActivos() {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/sliders/activos";
    return this.http.get(URL, {headers:headers});
    
  }

  getSlider(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/sliders/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  
}
