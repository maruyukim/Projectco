import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class DashboardPage implements OnInit {

  message = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    console.log(AuthService.accessToken);

    this.http.get("https://api1.yubilly.com/receipts?dateFrom=2022-01-01&dateTo=2022-01-15")
    .subscribe(
      (response) => {

        console.log('Response:', response);
        this.message = JSON.stringify(response);

      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    )
  }

}
