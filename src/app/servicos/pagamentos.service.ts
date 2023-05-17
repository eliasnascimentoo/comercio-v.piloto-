import { Injectable } from '@angular/core';
import { addDoc, doc, collection, collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Pay{
  id: any;
  nome?: string;
  nascimento?: Date;
  cpf?: string;
  numerocartao?: string;
  validade?: Date;
  cvc?: string;
  endereco?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {
  
  colecao: string = "pay";
  constructor(private firestore: Firestore) { }

  cadastrar(pay: any) {
    const pagamento = collection(this.firestore, this.colecao);
    return addDoc(pagamento, pay);
  }  
}
