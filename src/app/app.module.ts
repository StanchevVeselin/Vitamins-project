import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductItemComponent,
    CatalogComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
