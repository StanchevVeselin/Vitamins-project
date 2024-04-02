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
import { UserModule } from './user/user.module';
import { ErrorComponent } from './error/error.component';
import { DetailModule } from './detail/detail.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductItemComponent,
    CatalogComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    DetailModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
