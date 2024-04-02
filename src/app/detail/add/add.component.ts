import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { DetailService } from '../detail.service';
import { User } from 'src/app/types/user';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/types/comments';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() filteredCommentsEvent = new EventEmitter<Comments[]>();
  user: User | undefined
  content: string = ""
  userEmail: string = "" 
  productId: string = ""

   constructor(private detailService: DetailService,private activatedRoute: ActivatedRoute) {

   } 

   
loadComments():void{
      this.userEmail = sessionStorage.getItem("email") ?? ""
  this.activatedRoute.params.subscribe(p=> {
  this.productId = p["id"]
  })
  
    
     this.detailService.getAllComments(this.productId).subscribe((data) => {
        const filteredComments = data.filter(comment => comment.productId === this.productId)
          console.log(filteredComments);
          this.filteredCommentsEvent.emit(filteredComments)
      })
      
}


   addComentHandler(form: NgForm) {
      if(form.invalid) {
        return
      }
      
      
      
      this.userEmail = sessionStorage.getItem("email") ?? ""
     
      
      this.content = form.value.content
     this.detailService.addComent(this.userEmail,this.content, this.productId)
    // this.detailService.getAllComments(this.productId)
    this.loadComments()
     
     
    form.reset()
   }


   
 

}
