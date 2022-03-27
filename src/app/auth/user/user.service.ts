import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.decodeJWT(); // se tem token, todos componentes com subscribe serão notificados
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnsToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveAToken(token: string) {
    this.tokenService.saveToken(token);
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  loged() {
    return this.tokenService.haveToken();
  }
}

//BehavioSubject é um tipo de Observable que envia o último dado do subscribe e guarda o estado, envia e recebe
//next() - executa o próximo, está disponível no observable BehavioSubject, em outros não tem esse método
