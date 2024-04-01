import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private userService: UserService) {}
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn()
  }
  
  login(form: NgForm){
      if(form.invalid) {
        return
      }
      
    const {email,password} = form.value
    console.log(form.value);
    

    this.userService.login(email,password)
    this.isLoggedIn = true
  }
}
