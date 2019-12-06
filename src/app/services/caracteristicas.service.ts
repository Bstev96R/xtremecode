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
    this.CaracteristicaCollection = afs.collection<CaracteristicaInterface>('caracteristicas', ref => ref.orderBy('fecha', 'desc'));
    this.caracteristica = this.CaracteristicaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CaracteristicaInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  getCaracteristica(){
    return this.caracteristica;
  }

  addCaracteristica(caracteristica: CaracteristicaInterface){

    console.log('nueva caracteristica');
    this.CaracteristicaCollection.add(caracteristica);
    
  }

  deleteCurso() {
    console.log('Borrar caracterstica')
    
  }

  updateCurso() {
    console.log('actualizar caracteristica')
}
}

