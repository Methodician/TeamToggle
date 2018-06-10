import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: Observable<any[]>;
  constructor(private db: AngularFirestore) { this.getChats() }

  getChats() {
    this.chats = this.db.collection('chats').valueChanges();
  }

  addChat(text: string) {
    this.db.collection('chats').add(
      {
        text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    );
  }

}
