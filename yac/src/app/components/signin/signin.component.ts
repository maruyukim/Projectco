import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  standalone: true,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) {}

  signIn(username: string, password: string) {
    this.authService.signIn(username, password).subscribe(
      (response) => {
        // Handle the response from the API
        console.log('Response:', response);
      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }

  sendPostRequest() {
    const username = 'your_username'; // Replace with actual values
    const password = 'your_password'; // Replace with actual values

    // Call your service's signIn method to send the POST request
    this.authService.signIn(username, password).subscribe(
      (response) => {
        // Handle the response from the API
        console.log('Response:', response);
      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }

  ngOnInit() {}

}
