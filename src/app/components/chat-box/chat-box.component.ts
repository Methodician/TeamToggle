import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  chats: any;

  constructor(private chatSvc: ChatService) { }

  ngOnInit() {
    this.chatSvc.chats.subscribe(chats => {
      this.chats = chats;
      console.log(chats);
    });
  }

  chatKeyup(e: any) {
    if (e.key == 'Enter') {
      this.addChat(e.target.value);
      e.target.value = '';
    }
  }

  addChat(text: any) {
    console.log(text);
    this.chatSvc.addChat(text);
  }

}
