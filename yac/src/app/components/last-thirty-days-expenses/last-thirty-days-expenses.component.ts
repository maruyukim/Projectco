import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/receipt.dto';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-thirty-days-expenses',
  templateUrl: './last-thirty-days-expenses.component.html',
  styleUrls: ['./last-thirty-days-expenses.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient]
})

export class LastThirtyDaysExpensesComponent implements OnInit {
  receipts: Receipt[] = [];
  receiptsUrl = "";
  lastThirtyDaysTotal = 0;

  constructor(
    private http: HttpClient,
    private authService: AuthService  // Inject AuthService here
  ) { }

  ngOnInit(): void {
    this.fetchThirtyDaysReceipts();
  }

  calculateTodayExpenses() {
    for (let i = 0; i < this.receipts.length; i++) {
      this.lastThirtyDaysTotal += parseFloat(this.receipts[i].total);
    }
    console.log("last30days:" + this.lastThirtyDaysTotal);
  }
  fetchThirtyDaysReceipts(): void {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    this.receiptsUrl = "https://api1.yubilly.com/receipts?dateFrom=" + this.get30DaysAgoFormattedDate()
    console.log("url=" + this.receiptsUrl);
    this.http.get<Receipt[]>(this.receiptsUrl)
      .subscribe(response => {
        this.receipts = response;  // Assuming response is the array of Receipts objects
        this.calculateTodayExpenses();
      });
  }

  get30DaysAgoFormattedDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

}

