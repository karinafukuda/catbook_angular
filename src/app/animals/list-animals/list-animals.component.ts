import { UserService } from './../../auth/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animal';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
      return param;
    });
  }
}

//params é um observable
