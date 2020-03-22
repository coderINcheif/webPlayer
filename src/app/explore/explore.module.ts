import { GeneresService } from './generes/services/generes.service';
import { ExploreComponent } from './components/explore.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { GeneresComponent } from './generes/generes.component';
import { SearchSheetComponent } from './search-sheet/search-sheet.component';
import { GenereCardComponent } from './genere-card/genere-card.component';

@NgModule({
  declarations: [
    ExploreComponent,
    GeneresComponent,
    SearchSheetComponent,
    GenereCardComponent
  ],
  imports: [CommonModule, ExploreRoutingModule],
  providers: [GeneresService]
})
export class ExploreModule {}
