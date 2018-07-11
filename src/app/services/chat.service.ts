import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatsRef: Observable<any[]>;
  chats = new BehaviorSubject<any[]>(null);
  currentUsers = new BehaviorSubject<any[]>(null);
  activeUser = new BehaviorSubject<any>(null);

  constructor(
    private db: AngularFirestore,
    private rtdb: AngularFireDatabase) {
    this.getChats();
    this.getRandomUser();
    // this.seedUser();
  }

  getChats() {
    this.chatsRef = this.db.collection('chats', ref =>
      ref.orderBy('timestamp', 'desc')
        .limit(100)
    ).valueChanges();
    this.chatsRef.subscribe(chats => {
      this.chats.next(chats.reverse());
    })
  }

  addChat(text: string) {
    const chattingUser = this.activeUser.value;
    const userInfo = {
      name: chattingUser.name,
      color: chattingUser.color,
      key: chattingUser.key
    }
    this.db.collection('chats').add(
      {
        text,
        userInfo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    );
  }

  getRandomUser() {
    const query = this.rtdb.list('users', ref => ref.orderByChild('active').equalTo(false)).snapshotChanges().pipe(
      map(users => users.map(user => {
        const data = user.payload.val();
        const key = user.key;
        return { key, ...data };
      }))
    );
    const subscription = query.subscribe(users => {
      if (users && users.length > 0) {
        const rand = Math.floor(Math.random() * users.length);
        this.currentUsers.next(users);
        this.activeUser.next(users[rand]);
        this.activateUser(users[rand].key);
        subscription.unsubscribe();
      }
    });
  }

  activateUser(userKey) {
    const ref = this.rtdb.database.ref(`users/${userKey}`);
    ref.onDisconnect().update({ active: false });
    ref.update({ active: true });
  }

  seedUser() {
    const user = {
      name: 'InfectedLemon',
      color: '#acef69',
      active: false
    }
    this.rtdb.list('users').push(user);
  }

}
