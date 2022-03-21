import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../auth/token.service';
import { Animals } from './animal';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listUser(nameUser: string): Observable<Animals> {
    const token = this.tokenService.returnsToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${nameUser}/photos`, {
      headers,
    });
  }
}
