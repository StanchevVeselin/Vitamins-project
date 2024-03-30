import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  user: User | undefined
  // userName: string = ""
  content: string = ""
  userEmail: string = "" 
  productId: string = ""
  filteredComments: Comments[] = []

   constructor(private detailService: DetailService,private activatedRoute: ActivatedRoute) {

   } 

   
// ngOnInit(): void {
//   this.userEmail = sessionStorage.getItem("email") ?? ""
//   this.activatedRoute.params.subscribe(p=> {
//   this.productId = p["id"]
//   })
  
    
//      this.detailService.getAllComments(this.productId).subscribe((data) => {
//        this.filteredComments = data.filter(comment => comment.productId === this.productId)
//           console.log(this.filteredComments);
//       })
//       console.log(this.filteredComments);
//       this.filteredComments.push()
// }  
loadComments():void{
      this.userEmail = sessionStorage.getItem("email") ?? ""
  this.activatedRoute.params.subscribe(p=> {
  this.productId = p["id"]
  })
  
    
     this.detailService.getAllComments(this.productId).subscribe((data) => {
       this.filteredComments = data.filter(comment => comment.productId === this.productId)
          console.log(this.filteredComments);
      })
      console.log(this.filteredComments);
      
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
     console.log(this.filteredComments);
     
    form.reset()
   }


   
 

}
