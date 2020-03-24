import { SyncService } from './search/shared/services/sync.service';
import { SearchModule } from './search/search.module';
import { RouterModule } from '@angular/router';
import { ViewControllerComponent } from './components/view-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

@NgModule({
  declarations: [ViewControllerComponent, NavigationButtonsComponent],
  imports: [CommonModule, SearchModule, RouterModule],
  providers: [SyncService],
  exports: [ViewControllerComponent]
})
export class ViewControllerModule {}
