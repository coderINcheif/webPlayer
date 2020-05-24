import { StreamComponent } from './stream.component/stream.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StreamComponent,
    children: [
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
        path: 'library',
        loadChildren: () =>
          import('./library/library.module').then((m) => m.LibraryModule),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('./shared/playlist-detail/playlist-detail.module').then(
            (m) => m.PlaylistDetailModule
          ),
      },
      {
        path: '',
        redirectTo: 'music',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamRoutingModule {}
