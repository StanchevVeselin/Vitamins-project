import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { DetailRoutingModule } from './detail-routing.module';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailsComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[DetailsComponent]
})
export class DetailModule { }
