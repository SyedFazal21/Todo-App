import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ModalComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [SigninComponent],
})
export class AuthModule {}
