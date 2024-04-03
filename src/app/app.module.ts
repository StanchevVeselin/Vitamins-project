import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { DetailModule } from './detail/detail.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductItemComponent,
    CatalogComponent,
    AuthenticateComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    HttpClientModule,
    DetailModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
