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
    setTimeout(() => {
      if (confirm('Please help us launch the real app by completing our survey.')) {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSd5d2OusldAfpsRkwVwfo08qGQKvGzy79ZHzinYyrgZdCy62g/viewform', '_blank');
        // location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd5d2OusldAfpsRkwVwfo08qGQKvGzy79ZHzinYyrgZdCy62g/viewform';
      }
    }, 120000);
  }


}
