import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SampleCardComponent } from 'src/app/components/sample-card/sample-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SampleCardComponent]
})

export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {}
}
