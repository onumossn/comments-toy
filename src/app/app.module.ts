import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';



import { CommentsService } from './comments.service';

import { CommentComponent } from './comment/comment.component';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { CommentViewerComponent } from './comment-viewer/comment-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentEditorComponent,
    CommentViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TagInputModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
