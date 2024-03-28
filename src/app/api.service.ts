import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';
import { Comments } from './types/comments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getAllProducts () {
    const {apiUrl} = environment

    return this.http.get<Product[]>(`${apiUrl}/data/products`)
  }

  getSingleProduct (id: string) {
    const {apiUrl} = environment

    return this.http.get<Product>(`${apiUrl}/data/products/${id}`)
  }

  // addComment(email: string, text: string) {
  //   const {apiUrl} = environment
    
  //       const token = sessionStorage.getItem('accessToken');
  //     console.log(token);
      
  //       if (!token) {
  //         console.error('Token not found in sessionStorage');
  //         return;
  //       }
    
  //       const headers = new HttpHeaders({
  //         'X-Authorization': token
  //       });
    
  //       return this.http.post<Comments>(`${apiUrl}/data/comments`, { email, text }, { headers }).subscribe(data=>console.log(data)
  //       );
  //     }
    
   

  //  return this.http.post<Comments>(`${apiUrl}/data/comments`, {email,text}).subscribe(data=> {

  //     console.log(data);
      
  //   }
    
    
    
  }
