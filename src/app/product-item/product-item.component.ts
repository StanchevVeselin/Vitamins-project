import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input("product") product = {} as Product
  constructor(private userService: ApiService, private activatedRoute: ActivatedRoute) {}

  // detailsHandle(id: string) {
  //  return this.userService.getSingleProduct(id)
   
  // }

}
