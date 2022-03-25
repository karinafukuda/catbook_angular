import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from 'src/app/auth/user/user.service';
import { Animals } from '../animal';
import { AnimalService } from '../animal.service';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalsResolver implements Resolve<Animals> {
  constructor(
    private animalService: AnimalService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalService.listUser(userName);
      }),
      take(1)
    );
  }
}
