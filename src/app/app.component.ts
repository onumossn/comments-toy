import { Component } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comment } from './comment';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Comments';
  comments: Observable<Comment[]>;
  newComment: Comment = new Comment();
  tags: Observable<String[]>;
  filter: String[] = [];

	constructor(public commentsService: CommentsService) {
    this.comments = commentsService.get(this.filter);
    this.tags = commentsService.getTagsList();
  }

  onFilterChange() {
    this.comments = this.commentsService.get(this.filter);
  }

  onSave(comment) {
    this.commentsService.save(comment)
      .subscribe(() => {
        this.newComment = new Comment()
        this.comments = this.commentsService.get(this.filter);
        this.tags = this.commentsService.getTagsList();
      });
  }

  onDelete(comment) {
    this.commentsService.delete(comment)
      .subscribe(() => {
        this.comments = this.commentsService.get(this.filter);
        this.tags = this.commentsService.getTagsList();
      });
  }
}
