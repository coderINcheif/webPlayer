import { MusicComponent } from './components/music.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';

@NgModule({
  declarations: [MusicComponent],
  imports: [CommonModule, MusicRoutingModule]
})
export class MusicModule {}
