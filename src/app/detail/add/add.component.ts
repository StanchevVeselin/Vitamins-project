import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { DetailService } from '../detail.service';
import { User } from 'src/app/types/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  user: User | undefined
  // userName: string = ""
  content: string = ""
  userEmail: string = "" 
  productId: string = ""
   constructor(private detailService: DetailService,private activatedRoute: ActivatedRoute) {

   } 
ngOnInit(): void {
  this.userEmail = sessionStorage.getItem("email") ?? ""
  this.activatedRoute.params.subscribe(p => {
    this.productId = p["id"]
    // this.apiService.getSingleProduct(id).subscribe( p => {
    //   this.product = p
      console.log(this.productId);
      this.detailService.getAllComments(this.productId).subscribe(data => {
       const filteredComment = data.filter(comment => comment.productId === this.productId)
          console.log(filteredComment);
          
      })
      })
}  
    
      


   addComentHandler(form: NgForm) {
      if(form.invalid) {
        return
      }
      
      
      
      this.userEmail = sessionStorage.getItem("email") ?? ""
     
      
      this.content = form.value.content
     this.detailService.addComent(this.userEmail,this.content, this.productId)
    form.reset()
   }
  // addComment(ev: Event,emailInput:string, contentInput: string) {
  //   ev.preventDefault()
  // this.apiService.addComment(emailInput, contentInput)
  // }  


}
