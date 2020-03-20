import { RouterModule } from '@angular/router';
import { ViewControllerComponent } from './components/view-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [ViewControllerComponent, NavigationButtonsComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ViewControllerComponent]
})
export class ViewControllerModule {}
