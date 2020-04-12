import { SearchModule } from './search/search.module';
import { RouterModule } from '@angular/router';
import { ViewControllerComponent } from './view-controller.components/view-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

@NgModule({
  declarations: [ViewControllerComponent, NavigationButtonsComponent],
  imports: [CommonModule, SearchModule, RouterModule],
  providers: [Location],
  exports: [ViewControllerComponent],
})
export class ViewControllerModule {}
