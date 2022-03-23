import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  auth(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/user/login`,
        {
          userName: user,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((response: any) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.userService.saveAToken(authToken);
        })
      );
  }
}
//Observable funciona como uma Promise
//@Injectable indica que a classe pode ser injetada em outro serviço
