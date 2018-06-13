import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('mainVid') mainVid: any;
  vids = {
    vid1: '../../../assets/vid1.mp4',
    vid2: '../../../assets/vid2.mp4',
    vid3: '../../../assets/vid3.mp4',
    vid4: '../../../assets/vid4.mp4',
  }

  isFavorite: boolean = false;
  favoriteIcon: string = 'favorite_border';
  selectedVidKey = 'vid1';
  currentTime;

  constructor() { }

  ngOnInit() {

  }

  setFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.favoriteIcon = 'favorite' : this.favoriteIcon = 'favorite_border';
  }

  pickVid(key) {
    // this.currentTime = this.mainVid.nativeElement.currentTime;
    // console.log('current time initially set', this.currentTime);
    this.selectedVidKey = key;
    // console.log('current time after vid change', this.currentTime)
    // this.mainVid.nativeElement.addEventListener('canplay', () => { this.changeCurrentTime() });

    // console.log(this.mainVid.nativeElement.currentTime);
  }

  shouldHide(key) {
    console.log(key);
    console.log(this.selectedVidKey);
    console.log(this.selectedVidKey == key);
    return !this.selectedVidKey == key;
  }

  changeCurrentTime() {
    // this.vidElement = this.mainVid.nativeElement;
    // console.log('event target current time', e.target.currentTime);
    console.log('current time inside event listener', this.currentTime);
    console.log('vid element inside event listener', this.mainVid.nativeElement.currentTime);
    this.mainVid.nativeElement.currentTime = this.currentTime;
    console.log('vid element inside event listener', this.mainVid.nativeElement.currentTime);

    // console.log(this.currentTime);
    // console.log(e.target.currentTime);
    // console.log(this.currentTime);
    // vid.play();
  }
}
