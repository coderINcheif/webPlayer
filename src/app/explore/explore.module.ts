import { ColorService } from './shared/services/color.service';
import { ParameterService } from './shared/services/parameter.service';
import { HorizontalListModule } from './../shared/modules/horizontal-list/horizontal-list.module';
import { GeneresService } from './generes/services/generes.service';
import { ExploreComponent } from './explore.component/explore.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { GeneresComponent } from './generes/generes.component';
import { GenereCardComponent } from './genere-card/genere-card.component';
import { GenereMusicComponent } from './genere-music/genere-music.component';

@NgModule({
  declarations: [
    ExploreComponent,
    GeneresComponent,
    GenereCardComponent,
    GenereMusicComponent,
  ],
  imports: [CommonModule, HorizontalListModule, ExploreRoutingModule],
  providers: [GeneresService, ParameterService, ColorService],
})
export class ExploreModule {}
