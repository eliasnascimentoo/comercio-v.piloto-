import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';
import { Dados, DadosService} from 'src/app/servicos/perfil.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  perfil: Dados[] = [];

  constructor(private service: DadosService,
    private nav: NavController,
    private autenticacao: AutenticacaoService) { }

  ngOnInit() {
    console.log(this.autenticacao.retornarUsuario());
    this.service.listar().subscribe(abc => {
      this.perfil = abc;
      console.log(this.perfil);
    });
  }
  iniciarEdicao(id:any){
    this.nav.navigateForward(["incluirperfil",
     {idperfil: id}]);
  }
  
}