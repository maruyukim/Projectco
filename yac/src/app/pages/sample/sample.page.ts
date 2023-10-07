import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { SampleComponent } from 'src/app/components/sample/sample.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SampleComponent, NavigationComponent]
})

export class SamplePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
