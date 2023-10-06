import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // This line is required
  selector: 'sample-component', // This is the unique selector to use in the HTML
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule], // Any imports that aren't used in the class itself need to be imported here
})

export class SampleComponent  implements OnInit {

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
