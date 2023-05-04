import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  credencial!: FormGroup;
  constructor(private nav: NavController,
              private auth: Auth,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.credencial = this.fb.group({
      email: ['', [Validators.required, Validators.email]], senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  irParaRegistro(){
    this.nav.navigateForward("registro");
  }

  irParaPerfil(){
    this.nav.navigateForward("perfil");
  }

  voltarHome(){
    this.nav.navigateBack("home");
  }

  logar(){
    
  }
}
