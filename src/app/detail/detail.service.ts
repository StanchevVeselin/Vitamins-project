import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { Comments } from '../types/comments';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  addComent(username: string, content: string) {
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

      this.http.post<Comments>(apiUrlComments,{username,content},{headers}).subscribe(data => console.log(data)
      )
  }

}