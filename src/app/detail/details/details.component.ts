import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { DetailService } from '../detail.service';
import { Comments } from 'src/app/types/comments';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  product: Product | undefined
  productId: string = ""
  filteredComments: Comments[] =[]
  content: string = ""
  userEmail: string = "" 

  editingCommentId: string = '';
  commentContent: string = '';
  editingComment: Comments | null = null
  isAuthor: boolean |undefined

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private detailService: DetailService, 
    public userService: UserService 
    ) {}
  
  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem("email") ?? ""
    this.activatedRoute.params.subscribe(p => {
    const id = p["id"]
      
      this.apiService.getSingleProduct(id).subscribe( p => {
        this.product = p
        this.loadComments()
        })
      })
  }

  loadComments():void{
    // this.userEmail = sessionStorage.getItem("email") ?? ""
    this.activatedRoute.params.subscribe(p=> {
        this.productId = p["id"]
    })
   this.detailService.getAllComments(this.productId).subscribe((data) => {
    
     this.filteredComments = data.filter(comment => comment.productId === this.productId).map(comment => {
      comment.isOwner = this.isOwner(comment.username);
      return comment
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
    this.loadComments()
    form.reset()
 }

 deleteCommentar(commentId: string): void {
  console.log(commentId);
  
    this.detailService.deleteComment(commentId).subscribe(() => {
      this.loadComments()
    })
 }



 openEditModal(comment: Comments): void {
  this.editingComment = comment;
  this.commentContent = this.editingComment.content; 
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

  if (this.editingComment) {
    this.editingComment.content = contentForm;
  }

  this.detailService.editComment(this.editingComment._id, contentForm,this.editingComment.productId,this.editingComment.isOwner,this.editingComment.username).subscribe((data) => {
    this.filteredComments = this.filteredComments.map(comment => {
      if (comment._id === data._id) {
        return data;
        username: comment.username
      } else {
        return comment; 
      }
    });
    this.closeEditModal()
  });
}


isOwner(email:string){
  
 return this.isAuthor = this.detailService.isOwner(email)
  
}








}

 
  

