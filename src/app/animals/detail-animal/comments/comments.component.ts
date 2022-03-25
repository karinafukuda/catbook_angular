import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CommentsArray } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<CommentsArray>;
  commentForm!: FormGroup;
  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.findComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.includeComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.findComment(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert('Comentário salvo com sucesso!');
      })
    );
  }
}

//nomes com $ por convenção representa um observable
