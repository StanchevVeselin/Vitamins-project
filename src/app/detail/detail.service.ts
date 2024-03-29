import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { Comments } from '../types/comments';
import { ApiService } from '../api.service';
import { Product } from '../types/product';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  product: Product []= []

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  // getSingleProduct() {
  //   console.log(this.activatedRoute.params)
  //   return this.activatedRoute.params
  // }


  addComent( username: string, content: string, productId:string) {
      const {apiUrlComments} = environment
      
       // Вземете токена от sessionStorage
       const token = sessionStorage.getItem('accessToken');
       console.log(token);
       
         // Проверете дали токенът съществува
         if (!token) {
           console.error('Token not found in sessionStorage');
           return;
         }
     
         // Дефинирайте хедърите за оторизация
         const headers = new HttpHeaders({
           'X-Authorization': token
         });


         
      this.http.post<Comments>(apiUrlComments,{username,content,productId},{headers}).subscribe(() => {
      })
      
      
  }

  getAllComments(productId:string) {
    const {apiUrlComments} = environment
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'X-Authorization': token ?? ""
    });

    return this.http.get<Comments[]>(apiUrlComments, {headers})
   
  }
}