import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Materiais, MateriaisService } from 'src/app/servicos/materiais.service';

@Component({
  selector: 'app-listacmp',
  templateUrl: './listacmp.page.html',
  styleUrls: ['./listacmp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListacmpPage implements OnInit {
  listacmp: Materiais[] = [];

  constructor(private service:MateriaisService,
              private nav: NavController,
              private alerta: AlertController) { }

  ngOnInit() {
this.service.listar().subscribe(abc => {
  this.listacmp = abc;
  console.log(this.listacmp)
})

  }

}
