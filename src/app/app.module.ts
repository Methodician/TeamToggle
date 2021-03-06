import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Matieral Component Module
import { MaterialModule } from './material.module';

// Pipes
import { KeysPipe } from './keys.pipe';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { StoreComponent } from './components/store/store.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { VideoWrapperFSComponent } from './components/video-wrapper-fs/video-wrapper-fs.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    HomeComponent,
    NavbarComponent,
    ChatBoxComponent,
    StoreComponent,
    VideoWrapperComponent,
    VideoWrapperFSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
