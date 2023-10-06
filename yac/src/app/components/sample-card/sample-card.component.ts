import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // This line is required
  selector: 'app-sample-card', // This is the unique selector to use in the HTML
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule], // Any imports that aren't used in the class itself need to be imported here
})

export class SampleCardComponent  implements OnInit {
  
  // Declaring the expected response as a type-safe JSON object
  private responseJSON: { // First we declare the keys and their types
    receiptId: number;
    merchantId: number;
    merchantName: string;
    invoiceEmail: string;
    invoiceDate: string;
    total: number;
    currency: string;
    labelId: number;
    labelName: string;
    labelColor: string;
    hasEmail: boolean;
    hasPdf: boolean;
    hasXml: boolean;
    hasJpg: boolean;
    hasAttachment: boolean;
    hasItems: boolean;
  } = { // Then we declare their default values
    receiptId: 0,
    merchantId: 0,
    merchantName: '',
    invoiceEmail: '',
    invoiceDate: '',
    total: 0,
    currency: '',
    labelId: 0,
    labelName: '',
    labelColor: '',
    hasEmail: false,
    hasPdf: false,
    hasXml: false,
    hasJpg: false,
    hasAttachment: false,
    hasItems: false
  };

  // This array will hold the responseJSON in an array that can be looped over in the HTML
  public responseJSONArray: [string, any][] = [];

  constructor(
    // Any services that are required to run ngOnInit() need to be injected here
    private http: HttpClient
  ) { }

  // This code runs when the component is loaded
  ngOnInit() {

    this.http.get("https://api1.yubilly.com/receipts?dateFrom=2022-01-01&dateTo=2022-01-15")
    .subscribe(
      (response) => {
        // Stringify the response object, then parse it into a JSON object
        const res = JSON.stringify(response);
        const resJSON = JSON.parse(res);

        // Assign the responseJSON object to the responseJSONArray to be used in the HTML
        this.responseJSONArray = Object.entries(resJSON);
      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    )
  }
}
