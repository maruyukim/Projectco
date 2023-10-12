import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceiptListComponent } from 'src/app/components/receipt-list/receipt-list.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReceiptListComponent, NavigationComponent]
})
export class ReceiptsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
