import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { CarrinhoService, Materiais } from 'src/app/servicos/carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { MateriaisService } from 'src/app/servicos/materiais.service';
import { deleteDoc } from 'firebase/firestore';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CarrinhoPage implements OnInit {
  id: any;
  materiais: any;
  listacmp: Materiais[] = [];
  splittedItems: string[] | undefined;
  constructor(private service: CarrinhoService, 
              private nav: NavController,
              private rota: ActivatedRoute,
              private alerta: AlertController,
              private materialService: MateriaisService) { 
                this.materiais = {
                  'nome': '', 
                  'cor': '', 
                  'preco': '' 
                };

              }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idmateriais'];
   
   const splittedItems = this.id.split('-');
    
    for (let i=0; i< splittedItems.length; i++){
      if (splittedItems[i] != ""){
        this.materialService.buscar(splittedItems[i]).subscribe(res =>{
          this.listacmp.push(res);
        });
      }
    }
    
  }
  async excluir(id:any){
    const mensagem = await this.alerta.create({
      header: "Excluir item?",
      message: "Deseja excluir este item?",
      buttons:[
        {text: "Sim",
        handler: rest => {

          this.listacmp.splice(id,1);
          //this.service.excluir(id);
        }
      },
      {text: "Não"}
      ]
    });
    await mensagem.present();
    //  this.service.excluir(id);
    }
    finalizarCompra(){
      this.nav.navigateForward('pagamento');
    }
}


