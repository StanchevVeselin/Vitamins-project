import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
   constructor(private detailService: DetailService) {} 


   addComentHandler(form: NgForm) {
      if(form.invalid) {
        return
      }
      const {userName,content} = form.value
      console.log(form.value);
     this.detailService.addComent(userName,content)
   }
  // addComment(ev: Event,emailInput:string, contentInput: string) {
  //   ev.preventDefault()
  // this.apiService.addComment(emailInput, contentInput)
  // }  


}
