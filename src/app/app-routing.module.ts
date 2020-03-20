import { PlaylistDetailComponent } from './playlist-detail/components/playlist-detail.component';
import { FavoritesComponent } from './favorites/components/favorites.component';
import { ExploreComponent } from './explore/components/explore.component';
import { MusicComponent } from './music/components/music.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'playlist/:playlist_id',
    component: PlaylistDetailComponent
  },
  {
    path: '',
    redirectTo: 'music',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
