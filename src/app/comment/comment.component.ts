import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';
@Component({
  selector: 'comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment: Comment;
  @Input() tags: Object[];
  @Output() save: EventEmitter<Comment> = new EventEmitter();

  editableComment: Comment;
  state: String = 'view';

  onEdit(comment) {
    this.state = 'edit';
    this.editableComment = {
      ...(this.comment),
      tags: [...(this.comment.tags)]
    };
  }

  onSave(comment) {
    this.save.emit(comment);
    this.state = 'view';
  }

  onCancel(comment) {
    this.state = 'view';
  }
}
