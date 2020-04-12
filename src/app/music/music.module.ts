import { HorizontalListModule } from './../shared/modules/horizontal-list/horizontal-list.module';
import { MusicComponent } from './music.component/music.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';

@NgModule({
  declarations: [MusicComponent],
  imports: [CommonModule, HorizontalListModule, MusicRoutingModule],
})
export class MusicModule {}
