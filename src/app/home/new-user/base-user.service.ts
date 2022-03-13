import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseUserService {
  constructor(private newUserService: NewUserService) {}

  isBaseUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.verifyUser(userName)),
        map((baseUser) => (baseUser ? { userExists: true } : null)),
        first()
      );
    };
  }
}

//baseUser é uma função que recebe o que o usuário está digitando (valueChanges do Angular) e converte na req do backend
//switchMap troca o fluxo
//map para pegar o resultado
//first para finalizar a função assícrona (o fluxo) e obter o resultado
