import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @ViewChild('chatbox') chatbox;
  chats: any;
  currentUser;
  users;

  constructor(private chatSvc: ChatService) { }

  ngOnInit() {
    this.chatSvc.activeUser.subscribe(user => {
      this.currentUser = user;
    });
    this.chatSvc.currentUsers.subscribe(users => this.users = users);
    this.chatSvc.chats.subscribe(chats => {
      this.chats = chats;
      this.scrollChatsToBottom();
    });
    setTimeout(() => {
      this.scrollChatsToBottom();
    }, 2000);
  }

  chatKeyup(e: any) {
    if (e.key == 'Enter') {
      this.addChat(e.target);
    }
  }

  addChat(input: any) {
    const text = input.value;
    this.chatSvc.addChat(text);
    input.value = '';
  }

  scrollChatsToBottom() {
    this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
  }

}
