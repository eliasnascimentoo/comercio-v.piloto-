import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { DadosService} from 'src/app/servicos/perfil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incluirdados',
  templateUrl: './incluirdados.page.html',
  styleUrls: ['./incluirdados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirdadosPage implements OnInit {
  id: any;
  dados: any;

  constructor(private service: DadosService, 
              private nav: NavController,
              private rota: ActivatedRoute) {
    this.dados = {
      'nome': '', 
      'endereco': '', 
      'telefone': '' 
    };
          
  }

  ngOnInit() {
    this.id = this.rota.snapshot.params['iddados'];

    if (this.id != undefined){
      this.service.buscar(this.id).subscribe(res =>{
        this.dados = res;
        console.log(res);
      });
    } 
    console.log("Id = " + this.id);
  }

  incluir(){
    if(this.id == undefined){
      this.service.cadastrar(this.dados);
    } else {
      this.service.alterar(this.dados);
    }
    this.nav.navigateForward("perfil");
  }
  
  voltar(){
    this.nav.navigateForward("perfil");
  }
}
