import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AppService } from 'src/app/home/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public loginForm;
  public isSubmitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    // APi call
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/home']);
          this.authService.isLoggedIn = true;
          const user = JSON.parse(atob(res.token.split('.')[1]));
          this.appService.userId = user.userId;
          sessionStorage.setItem('user', JSON.stringify(res));
        },

        error: () => {},
      });
  }
}
