import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { LastTenReceiptsComponent } from 'src/app/components/last-ten-receipts/last-ten-receipts.component';
import { TodayExpensesComponent } from 'src/app/components/today-expenses/today-expenses.component';
import { LastThirtyDaysExpensesComponent } from 'src/app/components/last-thirty-days-expenses/last-thirty-days-expenses.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NavigationComponent, LastTenReceiptsComponent, TodayExpensesComponent, LastThirtyDaysExpensesComponent]
})

export class DashboardPage implements OnInit {

  ngOnInit() { }
}
