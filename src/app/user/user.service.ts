import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';

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
      sessionStorage.setItem("accessToken",response.accessToken)
    })
    
  }

  
 
}
