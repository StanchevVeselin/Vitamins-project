import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { DetailService } from '../detail.service';
import { Comments } from 'src/app/types/comments';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  product: Product | undefined
  productId: string = ""
  filteredComments: Comments [] =[]
  content: string = ""
  userEmail: string = "" 
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute,private detailService: DetailService ) {
    
  }
  
  
  
  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem("email") ?? ""
    this.activatedRoute.params.subscribe(p => {
      const id = p["id"]
      
      this.apiService.getSingleProduct(id).subscribe( p => {
        this.product = p
        
        })
        
        console.log(this.detailService.getAllComments(id))
      })
    
    // this.activatedRoute.params.subscribe(p => {
    // this.productId = p["id"]
    
    //  return this.detailService.getAllComments(this.productId).subscribe(data => {
    //   this.filteredComments = data.filter(comment => comment.productId === this.productId)
    //       console.log(this.filteredComments);
          
    //   })
    //   })
    
  }

  // loadComments(productId: string): void {
  //   this.detailService.getAllComments(productId).subscribe(data => {
  //     this.filteredComments = data.filter(comment => comment.productId === productId);
  //     console.log(this.filteredComments);
  //   });
  // }

 
  
}
