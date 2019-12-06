import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {CaracteristicaInterface} from '../models/Caracteristica.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {
  CaracteristicaCollection: AngularFirestoreCollection<CaracteristicaInterface>;
  caracteristica: Observable<CaracteristicaInterface[]>;
  caracteristicaDoc: AngularFirestoreDocument<CaracteristicaInterface>;


  constructor( public afs: AngularFirestore) { 
    this.caracteristica= afs.collection('caracteristica').valueChanges();
  }


  getCaracteristica(){
    return this.caracteristica;
  }
}
