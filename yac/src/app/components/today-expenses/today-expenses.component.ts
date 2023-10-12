import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/receipt.dto';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today-expenses',
  templateUrl: './today-expenses.component.html',
  styleUrls: ['./today-expenses.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient]
})
export class TodayExpensesComponent implements OnInit {
  receipts: Receipt[] = [];
  receiptsUrl = "";
  todayTotal = 0;

  constructor(
    private http: HttpClient,
    private authService: AuthService  // Inject AuthService here
  ) { }

  ngOnInit(): void {
    this.fetchTodayReceipts();
  }

  calculateTodayExpenses() {
    for (let i = 0; i < this.receipts.length; i++) {
      this.todayTotal += parseFloat(this.receipts[i].total);
    }
  }
  fetchTodayReceipts(): void {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    this.receiptsUrl = "https://api1.yubilly.com/receipts?dateFrom=" + this.getCurrentDateFormatted()
    this.http.get<Receipt[]>(this.receiptsUrl)
      .subscribe(response => {
        this.receipts = response;  // Assuming response is the array of Receipts objects
      });
    this.calculateTodayExpenses();
  }

  getCurrentDateFormatted(): string {
    const currentDate = new Date();

    // Get the year, month, and day
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = currentDate.getDate().toString().padStart(2, '0');

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

}
