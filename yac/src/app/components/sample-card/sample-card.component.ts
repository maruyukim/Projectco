import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.scss'],
})
export class SampleCardComponent  implements OnInit {

  message = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get("https://api1.yubilly.com/receipts?dateFrom=2022-01-01&dateTo=2022-01-15")
    .subscribe(
      (response) => {
        // console.log('Response:', response);
        this.message = JSON.stringify(response);

      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    )
  }
}
