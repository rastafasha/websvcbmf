import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Eviroment
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  serverUrl = environment.apiUrl;
  isLoggedIn = false;

  public error = null;

  public user;




  constructor(
    private http: HttpClient,
    private router: Router
    ) {
      this.user;
    }

    get token():string{
      return localStorage.getItem('auth_token') || '';
    }

    get role(): 'SUPERADMIN' | 'ADMIN' | 'MEMBER' | 'GUEST' {
      return this.user.role!;
    }



    get headers(){
      return{
        headers: {
          'auth_token': this.token
        }
      }
    }

    getToken(){
      const token = localStorage.getItem('auth_token');
      return this.token;
   }


    guardarLocalStorage( user:any, access_token: any){
      // localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('auth_token', access_token.original.access_token);
    }




  


}
