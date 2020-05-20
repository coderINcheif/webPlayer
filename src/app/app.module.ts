import { MediaControllerModule } from './media-controller/media-controller.module';
import { TestDataService } from './shared/services/test-data.service';
import { ScrollService } from './shared/services/scroll-service/scroll.service';
import { OverlayService } from './shared/services/overlay-service/overlay.service';
import { ViewControllerModule } from './view-controller/view-controller.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { NavbarModule } from './navbar/navbar.module';
import { MusicModule } from './music/music.module';
import { ExploreModule } from './explore/explore.module';
import { LibraryModule } from './library/library.module';
import { PlaylistDetailModule } from './playlist-detail/playlist-detail.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaControllerComponent } from './media-controller/media-controller.component/media-controller.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    MusicModule,
    ExploreModule,
    LibraryModule,
    ViewControllerModule,
    MediaControllerModule,
    PlaylistDetailModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [OverlayService, ScrollService, TestDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
