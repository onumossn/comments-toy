import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'comment-viewer',
  templateUrl: './comment-viewer.component.html'
})
export class CommentViewerComponent {
  @Input() comment: Comment = new Comment();
  @Output() edit: EventEmitter<Comment> = new EventEmitter();
  @Output() delete: EventEmitter<Comment> = new EventEmitter();

  formattedText(text) {
    return Comment.formattedText(text);
  }
}
