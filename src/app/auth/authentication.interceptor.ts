import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.haveToken()) {
      const token = this.tokenService.returnsToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}

//a requisição é in terceptada aqui, cria-se com clone com clone() e o request retorna o obj com os adendos
