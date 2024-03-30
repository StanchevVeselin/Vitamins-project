import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../detail/detail.service';
import { Comments } from '../types/comments';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input("product") product = {} as Product
  filteredComments: Comments [] =[]
  constructor(private userService: ApiService, private activatedRoute: ActivatedRoute, private detailService: DetailService) {}

  
  handleClick(id: string) {
    
   return this.userService.getSingleProduct(id).subscribe(data => {
    console.log(data);
    // this.loadComments(id)
   })
   
  }

  // loadComments(productId: string): void {
  //   this.detailService.getAllComments(productId).subscribe(data => {
  //     this.filteredComments = data.filter(comment => comment.productId === productId);
  //     console.log(this.filteredComments);
  //   });
  // }
  

}
