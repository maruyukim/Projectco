import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SigninComponent } from '../components/signin/signin.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SigninComponent],
})

export class HomePage {
  constructor() {}
}
