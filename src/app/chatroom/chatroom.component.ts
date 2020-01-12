import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

public chats : Observable<any[]>;
constructor(db: AngularFirestore){
  this.chats = db.collection('chats').valueChanges();
  console.log('todo bien papa')
}

  ngOnInit() {
  }

}
