import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseUserService } from './base-user.service';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { isLowerCase } from './setLowerCase.validator';
import { sameUserPasswordValidator } from './user-password-equals.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private baseUserService: BaseUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, isLowerCase],
          [this.baseUserService.isBaseUser()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [sameUserPasswordValidator],
      }
    );
  }

  setRegister() {
    if (this.newUserForm.valid) {
      const userNew = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(userNew).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

//ngOnInit é executado após a construção de todos os elementos da classe
//group é um método angular que forma um objeto
//getRawValue retorna o estado dos objetos
