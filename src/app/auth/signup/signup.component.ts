import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public registerForm;
  public isSubmitted = false;
  public modalShow = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  

  submitForm() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authService
      .register(
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .subscribe({
        next: (res) => {
          this.modalShow = true;
        },
      });

    console.log(this.registerForm.value);
  }

  closeModal(event) {
    this.modalShow = event;
  }
}
