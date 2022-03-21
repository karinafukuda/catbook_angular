import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';

@NgModule({
  declarations: [ListAnimalsComponent, AnimalComponent, GridPhotosAnimalsComponent],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
