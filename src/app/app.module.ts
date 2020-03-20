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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
