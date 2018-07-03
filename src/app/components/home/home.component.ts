import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  interactionConfirmed = false;
  isFavorite: boolean = false;
  favoriteIcon: string = 'favorite_border';
  selectedVidIndex = 0;
  currentTime: number;
  videoArray: NodeListOf<HTMLVideoElement>;
  vids = {
    vid1: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
    vid2: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
    vid3: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
    vid4: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
    // vid1: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/vid1.mp4?alt=media&token=2b70a003-1c6f-495e-bbab-d5537c2054b3',
    // vid2: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/vid2.mp4?alt=media&token=b5d0f3ee-c61c-4dbb-8344-4b0487625b93',
    // vid3: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/vid3.mp4?alt=media&token=ea7c6076-13be-46f7-b438-1d327ba5f1c0',
    // vid4: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/vid4.mp4?alt=media&token=d2edbb75-0ee4-48fb-b667-f94ae6f4b969',
  };



  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoArray = document.getElementsByTagName('video');
  }

  confirmInteraction() {
    this.interactionConfirmed = true;
    setTimeout(() => {
      this.videoArray[this.selectedVidIndex].play();
    }, 500);
  }

  setFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.favoriteIcon = 'favorite' : this.favoriteIcon = 'favorite_border';
  }

  pickVid(index: number) {
    const currentTime = this.videoArray[this.selectedVidIndex].currentTime;
    this.videoArray[this.selectedVidIndex].pause();
    this.selectedVidIndex = index
    this.videoArray[index].currentTime = currentTime;
    setTimeout(() => {
      this.videoArray[index].play();
    }, 100);
  }

}
