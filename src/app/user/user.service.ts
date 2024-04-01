import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(email: string,password:string ) {
    const {apiUrlRegister} = environment
    // console.log(email,password);
    
      this.http.post<User>(apiUrlRegister, {email,password}).subscribe((response) => {
      // console.log(response)
      // localStorage.setItem(response.email, response.accessToken)
    }
    )
  }


  login(email:string, password:string) {
    const {apiUrlLogin} = environment

    console.log(email, password);

    this.http.post<User>(apiUrlLogin, {email,password}).subscribe((response) => {
      console.log(response);
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem("accessToken",response.accessToken)
      this.isLoggedIn()
    })
    
  }

  logout() {
    const{apiUrl} = environment
    // sessionStorage.removeItem("accessToken")
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
