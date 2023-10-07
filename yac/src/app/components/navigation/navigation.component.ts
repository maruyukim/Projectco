import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [IonicModule, NavigationComponent]
})
export class NavigationComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  sendToSamplePage() {
    // Send the user to the sample page
    this.router.navigate(['/sample']);
  }

  sendToDashboardPage() {
    // Send the user to the dashboard
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {}

}
