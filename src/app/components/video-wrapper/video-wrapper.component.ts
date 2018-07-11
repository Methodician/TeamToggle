import { Component, AfterViewInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

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
  vids = {
    vid1: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Hotdog_View.mp4?alt=media&token=e50fdc39-7c7d-4c73-99ee-0d09883d9fc9',
    vid2: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Lobster_View.mp4?alt=media&token=a91126db-0d76-48b5-9019-3fa07a6dc2d6',
    vid3: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Menace_View.mp4?alt=media&token=0ffa1bf3-dcaa-4d81-97e4-6c2f75ddcab6',
    vid4: 'https://firebasestorage.googleapis.com/v0/b/team-toggle.appspot.com/o/Nerds_View.mp4?alt=media&token=a9018082-6e7a-41f0-b917-ffc65c694865',
  };
  userNames = {
    user1: 'HotDog',
    user2: 'nerdlikeme',
    user3: 'Menace5051',
    user4: 'PinkPanther221'
  };

  constructor(private videoSvc: VideoService) {
    this.videoSvc.selectedVideo.subscribe(index => this.selectedVidIndex = index);
    this.videoSvc.currentTime.subscribe(time => this.currentTime = time);
  }

  ngAfterViewInit() {
    this.videoArray = document.getElementsByTagName('video');
  }

  toggleFsMode() {
    this.videoSvc.toggleFsMode();
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
    this.videoSvc.setSelectedVideo(index);
    this.videoSvc.setCurrentTime(currentTime);
    this.videoArray[index].currentTime = this.currentTime;
    setTimeout(() => {
      this.videoArray[index].play();
    }, 100);
  }

}
