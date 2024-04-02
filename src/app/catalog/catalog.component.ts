import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  products: Product[] = [] 
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getAllProducts().subscribe((products => {
        this.products = products
      }))  
  }
}
