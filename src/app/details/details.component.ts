import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      const id = p["id"]
      this.apiService.getSingleProduct(id).subscribe( p => console.log(p))
      })
    
  }
}
