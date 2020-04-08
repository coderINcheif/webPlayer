import { ScrollService } from './shared/services/scroll-service/scroll.service';
import { OverlayService } from './shared/services/overlay-service/overlay.service';
import { ViewControllerModule } from './view-controller/view-controller.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NavbarModule } from './navbar/navbar.module';
import { MusicModule } from './music/music.module';
import { ExploreModule } from './explore/explore.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PlaylistDetailModule } from './playlist-detail/playlist-detail.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    MusicModule,
    ExploreModule,
    FavoritesModule,
    ViewControllerModule,
    PlaylistDetailModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [OverlayService, ScrollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
