import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Comments } from '../types/comments';
import { Product } from '../types/product';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  product: Product []= []
  filterdComments: Comments[] = []
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  addComent( username: string, content: string, productId:string){
      const {apiUrlComments} = environment
      const token = sessionStorage.getItem('accessToken');
       
         if (!token) {
           console.error('Token not found in sessionStorage');
           return;
         }
     
         const headers = new HttpHeaders({
           'X-Authorization': token
         });

     this.http.post<Comments>(apiUrlComments,{username,content,productId},{headers}).subscribe(data => {
        this.getAllComments(productId)
     })
  }

  getAllComments(productId:string){
    const {apiUrlComments} = environment
    const token = sessionStorage.getItem('accessToken');
    // const headers = new HttpHeaders({
    //   'X-Authorization': token ?? ""
    // });
    // {headers}
   return this.http.get<Comments[]>(apiUrlComments)
  }

  deleteComment(commentId: string) {
      const {apiUrlComments} = environment
      const token = sessionStorage.getItem('accessToken');
      const headers = new HttpHeaders({
        'X-Authorization': token ?? ""
      });
      return this.http.delete<Comments>(`${apiUrlComments}/${commentId}`, {headers})
  }

  editComment(commentId: string, content: string,productId:string,isOwner:boolean,username: string) {
    const {apiUrlComments} = environment
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'X-Authorization': token ?? ""
    });
    return this.http.put<Comments>(`${apiUrlComments}/${commentId}`,{content,productId,isOwner,username} ,{headers})
  }

  isOwner(commentOwnerEmail: string): boolean {
    const userEmail = sessionStorage.getItem("email") ?? ""
    const isOwner = userEmail === commentOwnerEmail
    
    return userEmail === commentOwnerEmail
  }

}