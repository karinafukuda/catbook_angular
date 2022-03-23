import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

const routes: Routes = [
  {
    path: '',
    component: ListAnimalsComponent,
  },
  {
    path: ':animalId',
    component: DetailAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
