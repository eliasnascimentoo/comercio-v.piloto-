import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  public progress = 0;

  constructor(private nav: NavController, private autenticacao: AutenticacaoService ) {
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
  
    console.log(this.autenticacao.retornarUsuario());
  }

  irParaLogin(){
    this.nav.navigateForward('login');
  }

  

}
