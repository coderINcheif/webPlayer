import { GeneresService } from './generes/services/generes.service';
import { ExploreComponent } from './components/explore.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { GeneresComponent } from './generes/generes.component';
import { GenereCardComponent } from './genere-card/genere-card.component';
import { GenereMusicComponent } from './genere-music/genere-music.component';

@NgModule({
  declarations: [ExploreComponent, GeneresComponent, GenereCardComponent, GenereMusicComponent],
  imports: [CommonModule, ExploreRoutingModule],
  providers: [GeneresService]
})
export class ExploreModule {}
