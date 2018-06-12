import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatsRef: Observable<any[]>;
  chats = new BehaviorSubject<any[]>(null);

  constructor(private db: AngularFirestore) { this.getChats() }

  getChats() {
    this.chatsRef = this.db.collection('chats').valueChanges();
    this.chatsRef.subscribe(chats => {
      this.chats.next(chats);
    })
  }

  addChat(text: string, userName: string) {
    this.db.collection('chats').add(
      {
        text,
        userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    );
  }

}
