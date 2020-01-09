import { ChatService } from './../services/chat.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  menssage: string;

  constructor (private chat: ChatService) {

   }
  ngOnInit() {
  }

  send(){
    this.chat.sendMenssage(this.menssage)
  }
  handleSubmit(event){
     if (event.keyCode === 13) {
       this.send();     
     }
  }

}
