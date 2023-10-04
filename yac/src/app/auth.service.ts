import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api2.yubilly.com/auth/signInSimple';

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string) {
    const body = {
      username: "appuser@yubilly.com",
      password: "appuser01",
    };

    return this.http.post(this.apiUrl, body);
  }
}
