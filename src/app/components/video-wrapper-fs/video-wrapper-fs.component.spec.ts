import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWrapperFSComponent } from './video-wrapper-fs.component';

describe('VideoWrapperFSComponent', () => {
  let component: VideoWrapperFSComponent;
  let fixture: ComponentFixture<VideoWrapperFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWrapperFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWrapperFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
