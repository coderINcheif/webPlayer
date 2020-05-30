import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginURL = 'http://localhost:8000/api/users/authentication/login/';
  private signupURL =
    'http://localhost:8000/api/users/authentication/register/';
  constructor(private http: HttpClient) {}

  login(credentials: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.loginURL, credentials, options);
  }

  signup(data: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.signupURL, data, options);
  }
}
