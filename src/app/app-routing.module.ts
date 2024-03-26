import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"catalog",component: CatalogComponent},
  {path:"products/details/:id",component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
