import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Materiais, MateriaisService } from 'src/app/servicos/materiais.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-listacmp',
  templateUrl: './listacmp.page.html',
  styleUrls: ['./listacmp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListacmpPage implements OnInit {
  listacmp: Materiais[] = [];
  ids: any = '';

  constructor(private service:MateriaisService,
              private nav: NavController,
              private alerta: AlertController, private comp: AppComponent) { }

  ngOnInit() {
this.service.listar().subscribe(abc => {
  this.listacmp = abc;
  console.log(this.listacmp)
})

  }

  Comprar(id:any){
    this.ids += id + "-";
    console.log(this.ids);
    this.comp.idProduto = this.ids;
      //this.nav.navigateForward("");
  }
}
