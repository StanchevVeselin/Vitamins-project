import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string,password:string ) {
    const {apiUrlRegister} = environment
    
      this.http.post<User>(apiUrlRegister, {email,password}).subscribe((response) => {
        this.login(email,password)
    }
    )
  }


  login(email:string, password:string){
    const {apiUrlLogin} = environment

    this.http.post<User>(apiUrlLogin, {email,password})
    .subscribe((response) => {
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem("accessToken",response.accessToken)
      this.isLoggedIn()
      this.router.navigate(["home"])
    })
  }

  logout() {
    const{apiUrl} = environment
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'X-Authorization': token ?? ""
    });
    
   return this.http.get(`${apiUrl}/users/logout`,{headers}).subscribe(() => {
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("accessToken")
   })
  }

  isLoggedIn() {
    const accessToken = sessionStorage.getItem("accessToken")
    
    return accessToken !== null
  }

  
 
}
