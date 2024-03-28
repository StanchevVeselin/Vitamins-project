import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login(form: NgForm){
      if(form.invalid) {
        return
      }
      console.log(form.invalid);
      
    const {email,password} = form.value
    console.log(form.value);
    

    this.userService.login(email,password)
  }
}
