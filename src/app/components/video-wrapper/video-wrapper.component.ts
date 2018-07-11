import { Component, AfterViewInit } from '@angular/core';
import { VideoService, vids, userNames } from '../../services/video.service';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.scss']
})
export class VideoWrapperComponent implements AfterViewInit {
  interactionConfirmed = false;
  isFavorite: boolean = false;
  favoriteIcon: string = 'favorite_border';
  selectedVidIndex = 0;
  currentTime: number;
  videoArray: NodeListOf<HTMLVideoElement>;
  vids = vids;
  userNames = userNames;

  constructor(private videoSvc: VideoService) {
    this.trackCurrentVid();
    this.trackInteraction();
  }

  ngAfterViewInit() {
    this.videoArray = document.getElementsByTagName('video');
    this.trackCurrentTime();
  }

  toggleFsMode() {
    const currentTime = this.videoArray[this.selectedVidIndex].currentTime;
    console.log('time at tiggle', currentTime);
    this.videoSvc.setCurrentTime(currentTime);
    this.videoArray[this.selectedVidIndex].pause();
    this.videoSvc.toggleFsMode();
  }

  trackCurrentVid() {
    this.videoSvc.selectedVideo.subscribe(index => this.selectedVidIndex = index);
  }

  trackCurrentTime() {
    this.videoSvc.currentTime.subscribe(time => {
      console.log('normal Time', time);
      this.currentTime = time;
      if (this.interactionConfirmed) {
        setTimeout(() => {
          console.log('about to play at time', this.currentTime);
          this.videoArray[this.selectedVidIndex].play();
          this.videoArray[this.selectedVidIndex].currentTime = this.currentTime;
        }, 100);
      }
    });
  }

  pickVid(index: number) {
    const currentTime = this.videoArray[this.selectedVidIndex].currentTime;
    this.videoArray[this.selectedVidIndex].pause();
    this.videoSvc.setSelectedVideo(index);
    this.videoSvc.setCurrentTime(currentTime);
  }

  setFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.favoriteIcon = 'favorite' : this.favoriteIcon = 'favorite_border';
  }

  confirmInteraction() {
    this.videoSvc.confirmInteraction();
  }

  trackInteraction() {
    this.videoSvc.interactionConfirmed.subscribe(confirmation => {
      this.interactionConfirmed = confirmation;
      if (confirmation) {
        setTimeout(() => {
          this.videoArray[this.selectedVidIndex].play();
        }, 500);
      }
    });
  }

}
