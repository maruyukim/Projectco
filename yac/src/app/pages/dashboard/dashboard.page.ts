import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SampleComponent } from 'src/app/components/sample/sample.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SampleComponent]
})

export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {}
}
