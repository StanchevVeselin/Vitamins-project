import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { passMatchVAldiator } from '../utils/matchPass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder,private userService: UserService) {
      this.form = this.fb.group({
        email:["", [Validators.required,Validators.email]],
        username:["", [Validators.required,Validators.minLength(3)]],
        passGroup: this.fb.group({
          password: ["", [Validators.required,Validators.minLength(6)]],
          repassword: ["", [Validators.required,Validators.minLength(6)]]
        },{
          validators: [passMatchVAldiator('password','repassword')]
        })
      })
    }
  
    register(): void {
      if(this.form.invalid) {
        return
      }

      const userData: User = {
        email: this.form.value.email,
        password: this.form.value.passGroup.password,
        _createdOn: 0, // поставете подходяща стойност за създадено на
        _id: '', // поставете подходяща стойност за идентификационен номер
        accessToken: '' // поставете подходяща стойност за токен
      };
      
      this.userService.register(userData.email,userData.password)
      
    }
    // Variant 2
  // constructor(private userService: UserService) {}
  //   register(form: NgForm) {
  //     const {email,password} = form.value
  //     console.log(form.value);
      
  //  this.userService.register(email,password)
  //   }
}
