import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  ) {}

  // This function is called when the user clicks the Sign In button
  sendLoginRequest() {
    // Pull email and password from the form
    const email = this.login.get('email')?.value;
    const password = this.login.get('password')?.value; 

    // Call the AuthService signIn method for signing in
    this.authService.signIn(email, password);
  }
  
  ngOnInit() {
    // Establishes the login form and its validators
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
