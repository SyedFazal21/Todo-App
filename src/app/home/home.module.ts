import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, TaskComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [HomepageComponent],
})
export class HomeModule {}
