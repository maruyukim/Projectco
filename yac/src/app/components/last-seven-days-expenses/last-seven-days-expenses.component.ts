import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/receipt.dto';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-last-seven-days-expenses',
  templateUrl: './last-seven-days-expenses.component.html',
  styleUrls: ['./last-seven-days-expenses.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, LastSevenDaysExpensesComponent],
  providers: [HttpClient]
})
export class LastSevenDaysExpensesComponent implements OnInit {
  receipts: Receipt[] = [];
  receiptsUrl = "";
  lastSevenDaysTotal = 0;

  constructor(
    private http: HttpClient,
    private authService: AuthService  // Inject AuthService here
  ) { }

  ngOnInit(): void {
    this.fetchSevenDaysReceipts();
  }

  calculateLastSevenDaysExpenses() {
    for (let i = 0; i < this.receipts.length; i++) {
      this.lastSevenDaysTotal += parseFloat(this.receipts[i].total);
    }
    console.log("last7days:" + this.lastSevenDaysTotal);
  }
  fetchSevenDaysReceipts(): void {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    this.receiptsUrl = "https://api1.yubilly.com/receipts?dateFrom=" + this.get7DaysAgoFormattedDate()
    console.log("url=" + this.receiptsUrl);
    this.http.get<Receipt[]>(this.receiptsUrl)
      .subscribe(response => {
        this.receipts = response;  // Assuming response is the array of Receipts objects
        this.calculateLastSevenDaysExpenses();
      });
  }

  get7DaysAgoFormattedDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

}

