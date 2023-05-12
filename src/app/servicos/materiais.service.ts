import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { ListacmpPage } from '../paginas/listacmp/listacmp.page';


export interface Materiais{
  id?: string;
  nome: string;
  cor: string;
  preco: string;
}

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  colecao: string = "materiais";
  constructor(private firestore: Firestore) { }

  listar():Observable<Materiais[]>{
    const materias = collection(this.firestore,
                     this.colecao );
    return collectionData(materias,
       {idField:'id'}) as Observable<Materiais[]>;
  }
}
