import { UserService } from './../../auth/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.returnUser().pipe(
      switchMap((user: any) => {
        const userName = user.name ?? '';
        return this.animalsService.listUser(userName);
      })
    );
  }
}
