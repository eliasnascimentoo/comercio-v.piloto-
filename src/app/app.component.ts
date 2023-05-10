import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private nav: NavController) {}

  irParaRegistro(){
    this.nav.navigateForward("registro");
  }

  irParaPerfil(){
    this.nav.navigateForward("perfil");
  }

  voltarHome(){
    this.nav.navigateBack("home");
}

irParaLogin(){
  this.nav.navigateForward('login');
}
}
