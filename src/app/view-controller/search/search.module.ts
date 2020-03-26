import { OverlayService } from './../../shared/services/overlay-service/overlay.service';
import { SearchService } from './shared/services/search.service';
import { SyncService } from './shared/services/sync.service';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { SearchSheetComponent } from './search-sheet/search-sheet.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTileComponent } from './result-tile/result-tile.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchSheetComponent,
    ResultPanelComponent,
    ResultTileComponent
  ],
  imports: [CommonModule],
  exports: [SearchSheetComponent],
  providers: [SyncService, SearchService]
})
export class SearchModule {}
