import { ViewControllerComponent } from './components/view-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

@NgModule({
  declarations: [ViewControllerComponent, NavigationButtonsComponent],
  imports: [CommonModule],
  exports: [ViewControllerComponent]
})
export class ViewControllerModule {}
