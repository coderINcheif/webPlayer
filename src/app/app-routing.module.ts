import { FavoritesComponent } from './favorites/components/favorites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'music',
    loadChildren: () =>
      import('./music/music.module').then((m) => m.MusicModule),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./playlist-detail/playlist-detail.module').then(
        (m) => m.PlaylistDetailModule
      ),
  },
  {
    path: '',
    redirectTo: 'music',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
