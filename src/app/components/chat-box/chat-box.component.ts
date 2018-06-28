import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @ViewChild('chatbox') chatbox;
  chats: any;

  constructor(private chatSvc: ChatService) { }

  ngOnInit() {
    this.chatSvc.chats.subscribe(chats => {
      this.chats = chats;
      this.scrollChatsToBottom();
    });
    setTimeout(() => {
      this.scrollChatsToBottom();
    }, 1000);
  }

  chatKeyup(e: any) {
    if (e.key == 'Enter') {
      this.addChat(e.target);
    }
  }

  addChat(input: any) {
    const text = input.value;
    this.chatSvc.addChat(text, 'd00djoe');
    input.value = '';
  }

  scrollChatsToBottom() {
    this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
  }

}
