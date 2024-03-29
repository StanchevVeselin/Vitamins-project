import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { DetailService } from '../detail.service';
import { Comments } from 'src/app/types/comments';

@Component({
  selector: 'app-added-coment',
  templateUrl: './added-coment.component.html',
  styleUrls: ['./added-coment.component.css']
})
export class AddedComentComponent implements  OnInit{
  @Input() user: User | undefined 
  @Input() content: string =""
  @Input() filteredComments: Comments[]=[]

  ngOnInit(): void {
    console.log(this.filteredComments)
    
  }
  

 
  constructor(private detailService: DetailService) {}

 
}