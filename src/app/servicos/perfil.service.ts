import { Injectable } from '@angular/core';
import { addDoc, doc, collection, collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Dados{
  email?: string ;
  id?: string;
  nome: string;
  endereco: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  colecao: string = "dados";
  constructor(private firestore: Firestore) { }

  cadastrar(obj: any) {
    const perfil = collection(this.firestore, this.colecao);
    return addDoc(perfil, obj);
  }  

  listar():Observable<Dados[]>{
    const perfil = collection(this.firestore, 
        this.colecao);
        
    return collectionData(perfil, 
      {idField:'id'}) as Observable<Dados[]>;
  }

  buscar(id:any):Observable<Dados>{
    const perfil = doc(this.firestore, 
      this.colecao + '/' + id);
    
      return docData(perfil, 
        {idField: 'id'}) as Observable<Dados>;
  }

  alterar(obj: any){
    const perfil = doc(this.firestore, 
      this.colecao + '/' + obj.id );

    return updateDoc(perfil, {
      nome: obj.nome, endereco: obj.endereco, 
      telefone: obj.telefone
    });  
  }
}

