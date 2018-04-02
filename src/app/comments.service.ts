import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from 'rxjs';

import { Http } from '@angular/http';


@Injectable()
export class CommentsService {
  private comments: Comment[] = []

  constructor(private http: Http) {}

  private filterByTags(comments, filterTags) {
    return filterTags.length ? comments.filter(comment => comment.tags.some(tag => filterTags.includes(tag))) : comments;
  }

  get(filterTags: String[]) {
    if (this.comments.length > 0) {
      return Observable.of(this.filterByTags(this.comments, filterTags));
    }
    return this.http.get('/data/comments.json')
      .map(v => {
        this.comments = v.json();
        return this.filterByTags(this.comments, filterTags);
      });
  }

  save(comment: Comment) {
    comment.tags = comment.tags.filter(v => v);

    if (comment.id) {
      const indexOfComment = this.comments.findIndex(v => v.id === comment.id);
      this.comments[indexOfComment] = comment;
    } else {
      const id = parseInt(this.comments[this.comments.length - 1].id) + 1;
      comment.id = id.toString();
      this.comments.push(comment);
    }

    return Observable.of(comment);
  }

  getTagsList() {
    return this.get([]).map(comments => {
      let tagMap = {};
      comments.forEach(comment => {
        comment.tags.forEach(tag => tagMap[tag] = true);
      });

      return Object.keys(tagMap);
    });
  }
}
