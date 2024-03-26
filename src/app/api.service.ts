import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getAllProducts () {
    const {apiUrl} = environment

    return this.http.get<Product[]>(`${apiUrl}/data/products`)
  }

  getSingleProduct (id: string) {
    const {apiUrl} = environment

    return this.http.get<Product>(`${apiUrl}/data/products/${id}`)
  }
}
