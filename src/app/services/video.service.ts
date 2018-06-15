import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  uploadFile(event, pathName: string) {
    const file = event.target.files[0];
    console.log(file);
    const filePath = `vids/${pathName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    ).subscribe();
  }

  getDownloadUrl(filePath: string) {
    const ref = this.storage.ref(filePath);
    return ref.getDownloadURL();
  }

  getMetadata(filePath: string) {
    const ref = this.storage.ref(filePath);
    return ref.getMetadata();
  }

}
