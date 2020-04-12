import { LibraryComponent } from './components/favorites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './library-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    LibraryComponent,
    PlaylistComponent,
    ArtistComponent,
    AlbumComponent,
  ],
  imports: [CommonModule, FavoritesRoutingModule],
})
export class LibraryModule {}
