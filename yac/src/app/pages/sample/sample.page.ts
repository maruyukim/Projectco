import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SampleComponent } from 'src/app/components/sample/sample.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SampleComponent]
})

export class SamplePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
