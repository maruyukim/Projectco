import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  static accessToken = localStorage.getItem('accessToken');

  private apiUrl = 'https://api2.yubilly.com/auth/signInSimple';

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    const body = {
      username: email,
      password: password,
    };

    return this.http.post(this.apiUrl, body);
  }
}
