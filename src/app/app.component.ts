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
  idProduto: any= '';

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

irParaCarrinho(){
  console.log("Ids do Componente = " + this.idProduto);
  this.nav.navigateForward(["carrinho", {idmateriais: this.idProduto}]);
}

irParaListacmp(){
  this.nav.navigateForward("listacmp");
}

irParaContato(){
  this.nav.navigateForward("contato");
}

}
