import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [ReactiveFormsModule]
})

export class SigninComponent implements OnInit {
  login!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

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
    
    const email = this.login.get('email')?.value;
    const password = this.login.get('password')?.value; 

    // Call your service's signIn method to send the POST request
    this.authService.signIn(email, password).subscribe(
      (response) => {
        // Handle the response from the API
        // console.log('Response:', response);

        const res = JSON.stringify(response);
        const resJSON = JSON.parse(res);

        AuthService.accessToken = resJSON.accessToken;

        console.log(AuthService.accessToken);

        this.router.navigate(['/dashboard']);

      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }
  
  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
