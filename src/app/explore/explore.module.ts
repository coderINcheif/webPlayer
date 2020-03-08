import { ExploreComponent } from './components/explore.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule]
})
export class ExploreModule {}
