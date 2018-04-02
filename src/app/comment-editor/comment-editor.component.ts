import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'comment-editor',
  templateUrl: './comment-editor.component.html'
})
export class CommentEditorComponent {
  @Input() cancelable: Boolean = true;
  @Input() comment: Comment = new Comment();
  @Input() tags: Object[] = [];
  @Output() save: EventEmitter<Comment> = new EventEmitter();
  @Output() cancel: EventEmitter<Comment> = new EventEmitter();
}
