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

  constructor() { }

  toggleFsMode() {
    this.fsMode.next(!this.fsMode.value);
  }

  setSelectedVideo(index: number) {
    this.selectedVideo.next(index)
  }

  setCurrentTime(time: number) {
    this.currentTime.next(time);
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
