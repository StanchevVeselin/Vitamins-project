import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({providedIn:"root"})

export class AuthActivate implements CanActivate{
    constructor(private userService: UserService, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
        | boolean 
        | UrlTree 
        | Observable<boolean | UrlTree> 
        | Promise<boolean | UrlTree> {
            console.log(this.userService.isLoggedIn());
            if (this.userService.isLoggedIn()) {
                // Ако потребителят е вече логнат, пренасочете го към началната страница или друга страница, която желаете
                return this.router.createUrlTree(["/home"]);
              }
              return true; // Позволете достъпа до логин страницата за нелогнати потребители
    }
}