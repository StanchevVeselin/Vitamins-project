import { Component, OnInit, afterNextRender } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isLoggedIn: boolean | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn()
  }

  logout() {
    this.userService.logout()
    this.isLoggedIn = false
  }
}
