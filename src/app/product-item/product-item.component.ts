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
   })
   
  }
}
