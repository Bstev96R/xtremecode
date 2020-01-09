
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
   

import {ChatMenssage} from '../models/chat-message.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMenssages: AngularFireList <ChatMenssage[]>;
  chatMenssage: ChatMenssage; 
  userName: Observable<string>;


  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    })
  }

  sendMenssage(msg: string){
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMenssages = this.getMessages();
    this.chatMenssages = this.push({
      message: msg, 
      timeSent : timestamp,
      userName: this.userName,
      emial: email
    });
  }
}
