import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  verifyUser(nameUser: string) {
    return this.http.get(`${API}/user/exists/${nameUser}`);
  }
}
