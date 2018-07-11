import { Component, AfterViewInit } from '@angular/core';
import { VideoService, vids, userNames } from '../../services/video.service';

@Component({
  selector: 'app-video-wrapper-fs',
  templateUrl: './video-wrapper-fs.component.html',
  styleUrls: ['./video-wrapper-fs.component.scss']
})
export class VideoWrapperFSComponent implements AfterViewInit {

  isFavorite: boolean = false;
  favoriteIcon: string = 'favorite_border';
  selectedVidIndex = 0;
  currentTime: number;
  videoArray: NodeListOf<HTMLVideoElement>;
  vids = vids;
  userNames = userNames;

  constructor(private videoSvc: VideoService) {
    this.trackCurrentVid();
  }

  ngAfterViewInit() {
    this.videoArray = document.getElementsByTagName('video');
    this.trackCurrentTime();
  }

  toggleFsMode() {
    const currentTime = this.videoArray[this.selectedVidIndex].currentTime;
    this.videoSvc.setCurrentTime(currentTime);
    this.videoArray[this.selectedVidIndex].pause();
    this.videoSvc.toggleFsMode();
  }

  trackCurrentVid() {
    this.videoSvc.selectedVideo.subscribe(index => this.selectedVidIndex = index);
  }

  trackCurrentTime() {
    this.videoSvc.currentTime.subscribe(time => {
      this.currentTime = time;
      setTimeout(() => {
        this.videoArray[this.selectedVidIndex].play();
        this.videoArray[this.selectedVidIndex].currentTime = this.currentTime;
      }, 100);
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
}
