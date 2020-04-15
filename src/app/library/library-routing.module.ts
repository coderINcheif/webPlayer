import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { PlaylistComponent } from './playlist/playlist.component/playlist.component';
import { LibraryComponent } from './library.component/library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      {
        path: 'artist',
        component: ArtistComponent,
      },
      {
        path: 'playlist',
        component: PlaylistComponent,
      },
      {
        path: 'album',
        component: AlbumComponent,
      },
      {
        path: '',
        redirectTo: 'playlist',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
