// CommentService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comments } from '../../types/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comments[] = [];
  private commentsSubject = new BehaviorSubject<Comments[]>([]);

  constructor() { }

  getComments() {
    return this.commentsSubject.asObservable();
  }

  addComment(comment: Comments) {
    this.comments.push(comment);
    this.commentsSubject.next(this.comments);
  }
}