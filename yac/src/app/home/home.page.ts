import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SignInComponent } from '../components/signin/signin.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SignInComponent],
})

export class HomePage {
  constructor() {}
}
