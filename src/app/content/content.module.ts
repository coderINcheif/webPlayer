import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { MusicComponent } from './music/components/music.component';
import { ExploreComponent } from './explore/components/explore.component';
import { FavoritesComponent } from './favorites/components/favorites.component';

@NgModule({
  declarations: [MusicComponent, ExploreComponent, FavoritesComponent],
  imports: [CommonModule, ContentRoutingModule]
})
export class ContentModule {}
