import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { CommentsComponent } from './detail-animal/comments/comments.component';
import { MessagesModule } from '../components/messages/messages.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    GridPhotosAnimalsComponent,
    DetailAnimalComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessagesModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}
