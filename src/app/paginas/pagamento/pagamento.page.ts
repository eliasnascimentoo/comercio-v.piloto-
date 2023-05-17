import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PagamentosService } from 'src/app/servicos/pagamentos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PagamentoPage implements OnInit {
  id: any;
  pay: any;
  nome?: string;
  nascimento?: Date;
  cpf?: string;
  numerocartao?: string;
  validade?: Date;
  cvc?: string;
  endereco?: string;

  constructor(public alertController: AlertController,
                      private service: PagamentosService,
                      private nav: NavController,
                      private rota: ActivatedRoute) {
    this.pay = {
      'nome': '',
      'nascimento': '',
      'cpf': '',
      'numerocartao': '',
      'validade': '',
      'cvc': '',
      'endereco': '',
      };
   }

  async finalizarCompra() {

    this.pay['nome'] = this.nome;
    this.pay['nascimento'] = this.nascimento;
    this.pay['cpf'] = this.cpf;
    this.pay['numerocartao'] = this.numerocartao;
    this.pay['validade'] = this.validade;
    this.pay['cvc'] = this.cvc;
    this.pay['endereco'] = this.endereco;
    this.service.cadastrar(this.pay);
    console.log(this.pay);

    const alert = await this.alertController.create({
      header: 'Compra Efetuada',
      message: 'A compra foi efetuada com sucesso!',
      buttons: ['OK']
    });

    const pay ={
      header:'CADASTRADO!',
      message: 'O pagamento foi efetuado e cadastrado'
    };

    await alert.present();
  }

  ngOnInit() {
   
  }

}

  