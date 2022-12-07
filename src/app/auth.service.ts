import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', {
      email: email,
      password: password,
    });
  }

  register(userName: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/user/register', {
      userName,
      email: email,
      password: password,
    });
  }

}
