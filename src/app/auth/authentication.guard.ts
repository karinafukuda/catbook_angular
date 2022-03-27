import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private userService: UserService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.userService.loged()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
