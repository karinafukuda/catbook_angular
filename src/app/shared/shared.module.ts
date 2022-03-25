import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from '../components/messages/messages.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MessagesModule, ReactiveFormsModule],
  exports: [MessagesModule, ReactiveFormsModule],
})
export class SharedModule {}
