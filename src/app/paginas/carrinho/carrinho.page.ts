import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private service: CarrinhoService, 
              private nav: NavController,
              private rota: ActivatedRoute) { 
                this.materiais = {
                  'nome': '', 
                  'cor': '', 
                  'preco': '' 
                };

              }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idmateriais'];
    if (this.id != undefined){
      this.service.buscar(this.id).subscribe(res =>{
        this.materiais = res;
        console.log(res);
      });
    } 
    console.log("Id = " + this.id);
  }

}
