import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorComponent } from './core/error/error.component';
import { AuthActivate } from './guard/auth.avtivate';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"",pathMatch:"full",redirectTo: "/home"},
  {path:"catalog",component: CatalogComponent},
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {path: "404", component: ErrorComponent},
  {path:"**", redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
