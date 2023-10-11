import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/receipt.dto';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-ten-receipts',
  templateUrl: './last-ten-receipts.component.html',
  styleUrls: ['./last-ten-receipts.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient]
})
export class LastTenReceiptsComponent implements OnInit {

  receipts: Receipt[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService  // Inject AuthService here
  ) { }

  ngOnInit(): void {
    this.fetchReceipts();
  }

  fetchReceipts(): void {
    const headers = { 
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    this.http.get<Receipt[]>('https://api1.yubilly.com/receipts?pageSize=10&Page=1')
      .subscribe(response => {
        this.receipts = response;  // Assuming response is the array of Receipts objects
        console.log(this.receipts);
      });
  }
}