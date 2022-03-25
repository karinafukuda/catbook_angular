import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments, CommentsArray } from './comments';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  findComment(id: number): Observable<CommentsArray> {
    return this.http.get<CommentsArray>(`${API}/photos/${id}/comments`);
  }

  includeComment(id: number, commentText: string): Observable<Comments> {
    return this.http.post<Comments>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
