import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fsMode = false;

  constructor(private videoSvc: VideoService) {
    this.videoSvc.fsMode.subscribe(mode => this.fsMode = mode);
  }


}
