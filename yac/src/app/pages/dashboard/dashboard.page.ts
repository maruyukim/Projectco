import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { LastTenReceiptsComponent } from 'src/app/components/last-ten-receipts/last-ten-receipts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NavigationComponent, LastTenReceiptsComponent]
})

export class DashboardPage implements OnInit {

  ngOnInit() {}
}
