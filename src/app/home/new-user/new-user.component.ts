import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseUserService } from './base-user.service';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { isLowerCase } from './setLowerCase.validator';

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
    private baseUserService: BaseUserService
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
      }
      // {
      //   validators: [userAndPasswordValidator],
      // }
    );
  }

  setRegister() {
    const userNew = this.newUserForm.getRawValue() as NewUser;
    console.log(userNew);
  }
}

//ngOnInit é executado a pós a construção de todos os elementos da classe
//group é um método angular que forma um objeto
//getRawValue retorna o estado dos objetos
