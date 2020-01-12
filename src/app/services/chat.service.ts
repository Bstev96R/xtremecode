import { UserInterface } from './../models/user';
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { map } from "rxjs/operators";
import { Mensaje } from "./../models/mensaje.interface";


@Injectable({
  providedIn: "root"
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario : any = {};

  constructor(private afs: AngularFirestore, public afAuth:AngularFireAuth) {

    this.afAuth.authState.subscribe(user =>{
      if (!user) {
        return;
      }
      console.log('estado del usuario', user)
      this.usuario.name = user.displayName;
      this.usuario.uid = user.uid;
    })
  }

  

  loadMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>("chats", ref =>
      ref.orderBy("fecha", "desc").limit(5)
    );

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = mensajes;
        this.chats = [];

        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
          return this.chats;
      })
    );
  }

  addMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: this.usuario.name,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this.itemsCollection.add(mensaje);
  }
}
