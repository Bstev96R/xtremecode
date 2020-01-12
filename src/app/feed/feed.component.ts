import { async } from '@angular/core/testing';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ChatService } from './../services/chat.service';
import { ChatMessage } from './../models/chat-message.model';
import { Component, OnInit, OnChanges, PipeTransform, Pipe } from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html', 
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: AngularFireList <ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
   
  }

  ngOnChanges(){
    
  }

}
