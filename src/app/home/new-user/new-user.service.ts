import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/';

  registerNewUser(newUser: NewUser) {
    return this.http.post(`${this.url}user/signup`, newUser);
  }

  verifyUser(nameUser: string) {
    return this.http.get(`${this.url}user/exists/${nameUser}`);
  }
}
