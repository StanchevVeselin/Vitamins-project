import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
   constructor(private apiService: ApiService) {} 

  addComment(ev: Event,emailInput:string, contentInput: string) {
    ev.preventDefault()
  this.apiService.addComment(emailInput, contentInput)
  }  
}
