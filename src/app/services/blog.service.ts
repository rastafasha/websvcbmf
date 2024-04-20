import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  serverUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    public authService: AccountService,
  ) { }

  getBlogs() {
   let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog";
    return this.http.get(URL, {headers:headers});
  }
  getRecentBlogs() {
   let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/recientes";
    return this.http.get(URL, {headers:headers});
  }
  getFeaturedBlogs() {
   let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/destacados";
    return this.http.get(URL, {headers:headers});
  }
  getActiveBlogs() {
   let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/activos";
    return this.http.get(URL, {headers:headers});
  }
  

  getBlog(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/show/"+id;
    return this.http.get(URL,{headers:headers});
  }

  getPostByCategory(name: any) {

    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/category/"+name;
    return this.http.get(URL,{headers:headers});

  }

  getPostBySlug(slug: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer'+this.authService.token});
    let URL = this.serverUrl+"/blog/show/slug/"+slug;
    return this.http.get(URL,{headers:headers});
  }

  

}
