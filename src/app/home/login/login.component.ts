import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.auth(this.user, this.password).subscribe(
      () => {
        //console.log('autenticados');
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Usuário ou senha inválidos');
        console.log(error.statusText);
      }
    );
  }
}
