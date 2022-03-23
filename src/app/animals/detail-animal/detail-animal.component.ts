import { AnimalService } from './../animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animal';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css'],
})
export class DetailAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;
  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalService.findById(this.animalId);
  }

  like() {
    this.animalService.toLike(this.animalId).subscribe((liked) => {
      if (liked) {
        this.animal$ = this.animalService.findById(this.animalId);
      }
    });
  }

  delete() {
    this.animalService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => console.log(error)
    );
  }
}
