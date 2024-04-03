import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [FooterComponent,NavComponent, ErrorComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [FooterComponent,NavComponent,ErrorComponent],
})
export class CoreModule { }
