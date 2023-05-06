import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  usrLogado?: string;
  idLogado?: string;

  constructor(private auth: Auth) { }

  registrar(email:any, senha:any){
    console.log(email);
    console.log(senha);
    const usuario = createUserWithEmailAndPassword(this.auth, email, senha);
    return usuario;
  }

  logar(email:any, senha:any){
    const usuario = signInWithEmailAndPassword(this.auth, email,senha);
    return usuario;
  }

  sair(){
    return signOut(this.auth);
  }

  armazenaUsuarioLogado(email: any, id: any){
    this.usrLogado = email;
    this.idLogado = id;
  }
  retornarUsuario(){
    return this.usrLogado;
  }
}
