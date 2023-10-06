import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

// This service handles the authentication logic
export class AuthService {

  // Application-wide access token
  static accessToken = localStorage.getItem('accessToken');

  private loginURL = 'https://api2.yubilly.com/auth/signInSimple';

  constructor(
    private http: HttpClient,
    private router: Router,
    ) {}

  // Used to store or update the accessToken
  storeAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    AuthService.accessToken = accessToken;
  };

  // Used to send a login request to the server
  signIn(email: string, password: string) {

    // Create the body of the request
    const body = {
      username: email,
      password: password,
    };

    // The login (POST) request
    this.http.post(this.loginURL, body).subscribe(
      (response) => {
        // Stringify the response object, then parse it into a JSON object
        const res = JSON.stringify(response);
        const resJSON = JSON.parse(res);

        // Store the accessToken in localStorage
        this.storeAccessToken(resJSON.accessToken);

        // Send the user to the dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    )
  }
}
