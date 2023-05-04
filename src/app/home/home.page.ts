import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  public progress = 0;

  constructor(private nav: NavController) {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      //if (this.progress > 1) {
      //  setTimeout(() => {
      //    this.progress = 0;
      //  }, 1000);
      //}
    }, 50);
  
  }

  irParaLogin(){
    this.nav.navigateForward('login');
  }

}
