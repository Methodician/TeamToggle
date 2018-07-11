import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  fsMode = new BehaviorSubject(false);
  selectedVideo = new BehaviorSubject(0);
  currentTime = new BehaviorSubject(0);
  interactionConfirmed = new BehaviorSubject(false);

  constructor() { }

  toggleFsMode() {
    this.fsMode.next(!this.fsMode.value);
  }

  setSelectedVideo(index: number) {
    this.selectedVideo.next(index)
  }

  setCurrentTime(time: number) {
    console.log('setting time to', time);
    this.currentTime.next(time);
  }

  confirmInteraction() {
    this.interactionConfirmed.next(true);
  }





  // uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;

  // constructor(private storage: AngularFireStorage) { }

  // uploadFile(event, pathName: string) {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   const filePath = `vids/${pathName}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);

  //   this.uploadPercent = task.percentageChanges();

  //   task.snapshotChanges().pipe(
  //     finalize(() => this.downloadURL = fileRef.getDownloadURL())
  //   ).subscribe();
  // }

  // getDownloadUrl(filePath: string) {
  //   const ref = this.storage.ref(filePath);
  //   return ref.getDownloadURL();
  // }

  // getMetadata(filePath: string) {
  //   const ref = this.storage.ref(filePath);
  //   return ref.getMetadata();
  // }

}

export const vids = {
  vid1: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Hotdog_View.mp4?alt=media&token=e50fdc39-7c7d-4c73-99ee-0d09883d9fc9',
  vid2: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Lobster_View.mp4?alt=media&token=a91126db-0d76-48b5-9019-3fa07a6dc2d6',
  vid3: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Menace_View.mp4?alt=media&token=0ffa1bf3-dcaa-4d81-97e4-6c2f75ddcab6',
  vid4: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
};
export const userNames = {
  user1: 'MrHotDog',
  user2: 'Dirty Lobster',
  user3: 'Menace5150',
  user4: 'nerd like me'
};
