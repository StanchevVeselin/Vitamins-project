import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { DetailService } from '../detail.service';
import { Comments } from 'src/app/types/comments';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  // @Input() filteredComments: Comments[] = []
  product: Product | undefined
  productId: string = ""
  filteredComments: Comments[] =[]
  content: string = ""
  userEmail: string = "" 

  editingCommentId: string = '';
  commentContent: string = '';
  editingComment: Comments | null = null
  isAuthor: boolean |undefined

  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute,private detailService: DetailService ) {
    
  }
  
  
  
  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem("email") ?? ""
    
    this.activatedRoute.params.subscribe(p => {
      const id = p["id"]
      
      this.apiService.getSingleProduct(id).subscribe( p => {
        this.product = p
        this.loadComments()
        
        
        
        
        
        })
        
      })
     
    
    // this.activatedRoute.params.subscribe(p => {
    // this.productId = p["id"]
    
    //  return this.detailService.getAllComments(this.productId).subscribe(data => {
    //   this.filteredComments = data.filter(comment => comment.productId === this.productId)
    //       console.log(this.filteredComments);
          
    //   })
    //   })
    
  }

 


  loadComments():void{
    this.userEmail = sessionStorage.getItem("email") ?? ""
this.activatedRoute.params.subscribe(p=> {
this.productId = p["id"]
console.log(this.isAuthor);


})

  
   this.detailService.getAllComments(this.productId).subscribe((data) => {
     this.filteredComments = data.filter(comment => comment.productId === this.productId).map(comment => {
      comment.isOwner = this.isOwner(comment.username);
      return comment
     })
      // const filteredComments = data.filter(comment => comment.productId === this.productId)
        console.log(this.filteredComments);
        
        // console.log(this.isOwner(this.filteredComments.filter(c => c.username)));
        
    })
    
}


 addComentHandler(form: NgForm) {
    if(form.invalid) {
      return
    }
    
    
    
    this.userEmail = sessionStorage.getItem("email") ?? ""
   
    
    this.content = form.value.content
    console.log(form.value);
    
   this.detailService.addComent(this.userEmail,this.content, this.productId)
  // this.detailService.getAllComments(this.productId)
  this.loadComments()
  
   
   
  form.reset()
 }

 deleteCommentar(commentId: string): void {
  console.log(commentId);
  
    this.detailService.deleteComment(commentId).subscribe((data) => {
    console.log(data);
          
      this.loadComments()
    })
 }



 openEditModal(comment: Comments): void {
  this.editingComment = comment;
  this.commentContent = comment.content
  console.log('Editing comment:', comment);
}

closeEditModal(): void {
  this.editingComment = null;
}


submitEdit(form: NgForm): void {
  if (form.invalid) {
    return;
  }
  
  if (!this.editingComment) {
    return;
  }
  const contentForm = form.value.commentContent
  const newContent = this.commentContent;
  console.log(newContent);
  console.log(contentForm);
  
  this.detailService.editComment(this.editingComment._id, contentForm,this.editingComment.productId).subscribe((data) => {
    this.loadComments()
    this.closeEditModal()
  });
}


isOwner(email:string){
  
 return this.isAuthor = this.detailService.isOwner(email)
  
}








}

 
  

