import { Injectable } from '@angular/core';
import { addDoc, doc, collection, collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Materiais{
  id?: string;
  nome: string;
  cor: string;
  preco: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  colecao: string = "contato";
  constructor(private firestore: Firestore) { }

  cadastrar(obj: any) {
    const contatos = collection(this.firestore, this.colecao);
    return addDoc(contatos, obj);
  }  

  listar():Observable<Materiais[]>{
    const listacmp = collection(this.firestore, 
        this.colecao);
        
    return collectionData(listacmp, 
      {idField:'id'}) as Observable<Materiais[]>;
  }

  buscar(id:any):Observable<Materiais>{
    const listacmp = doc(this.firestore, 
      this.colecao + '/' + id);
    
      return docData(listacmp, 
        {idField: 'id'}) as Observable<Materiais>;
  }

  alterar(obj: any){
    const listacmp = doc(this.firestore, 
      this.colecao + '/' + obj.id );

    return updateDoc(listacmp, {
      nome: obj.nome, email: obj.email, 
      telefone: obj.telefone
    });  
  }

excluir(id:any){
    const listacmp = doc(this.firestore, this.colecao + "/" + id);
      return deleteDoc(listacmp);
  }
}