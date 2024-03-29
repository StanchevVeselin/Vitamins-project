import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product: Product | undefined


  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute ) {}
  
  
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      const id = p["id"]
      this.apiService.getSingleProduct(id).subscribe( p => {
        this.product = p
        console.log(this.product);
        
        })
      })
    
  }
}
