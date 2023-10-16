import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Receipt } from 'src/app/models/receipt.dto';
import { ReceiptsService } from 'src/app/services/receipts.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  standalone: true,
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, MatExpansionModule,],
})

export class ReceiptListComponent implements OnInit {
  receiptsList: Receipt[] = [];
  periodsList: any[] = [];
  selectePeriodId: number = 0;
  Period: string = ''
  merchantsList: any[] = [];
  merchantName: string = '';
  merchantId: number = 0;
  currenciesList: any[] = [];
  currencyCode: string = '';
  labelsList: any[] = [];
  selectedLabelId: number = 0;
  labelName: string = '';
  labelColor: string = '';
  inUse: boolean = false;
  filteredReceipts: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,  // Inject AuthService here
    private receiptsService: ReceiptsService
  ) { }

  ngOnInit(): void {
    const data$ = this.receiptsService.loadAllReceipts().pipe(
      shareReplay(1) // Cache and share the result
    );
    //Subscribe to the data$ observable for receipts
    data$.subscribe((data: any) => {
      this.receiptsList = data[0].receipts;
    });
    //Subscribe to the data$ observable for periods
    data$.subscribe((data: any) => {
      this.periodsList = data[0].periods;
    });
    //merchants
    data$.subscribe((data: any) => {
      this.merchantsList = data[0].merchants;
    });
    //currency
    data$.subscribe((data: any) => {
      this.currenciesList = data[0].currencies;
    });
    //labels
    data$.subscribe((data: any) => {
      this.labelsList = data[0].labels;
    });
  }

  //select merchant
  onSelectChange(): void {
    this.receiptsService.fetchReceiptListbyParameters(this.selectePeriodId, this.merchantName, this.currencyCode, this.selectedLabelId).subscribe((response) => {
      console.log(this.selectePeriodId, this.merchantName, this.currencyCode, this.selectedLabelId, this.labelColor);
      this.receiptsList = response;
      console.log(this.receiptsList);
    })
  }

}
