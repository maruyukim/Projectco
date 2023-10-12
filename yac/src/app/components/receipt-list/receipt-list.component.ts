import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Receipt } from 'src/app/models/receipt.dto';

@Component({
  standalone: true, 
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule], 
})
export class ReceiptListComponent  implements OnInit {
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
