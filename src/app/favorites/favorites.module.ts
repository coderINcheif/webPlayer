import { FavoritesComponent } from './components/favorites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule]
})
export class FavoritesModule {}
