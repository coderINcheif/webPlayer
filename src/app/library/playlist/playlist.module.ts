import { HorizontalListModule } from './../../shared/modules/horizontal-list/horizontal-list.module';
import { PlaylistComponent } from './playlist.component/playlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@NgModule({
  declarations: [PlaylistComponent, CreateDialogComponent],
  imports: [CommonModule, HorizontalListModule],
  exports: [PlaylistComponent],
})
export class PlaylistModule {}
