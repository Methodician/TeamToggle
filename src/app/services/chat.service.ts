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
    this.chatsRef = this.db.collection('chats', ref =>
      ref.orderBy('timestamp', 'desc')
        .limit(100)
    ).valueChanges();
    this.chatsRef.subscribe(chats => {
      this.chats.next(chats.reverse());
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
