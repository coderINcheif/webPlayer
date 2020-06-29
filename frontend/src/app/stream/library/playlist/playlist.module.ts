import { LoadingIndicatorModule } from './../../../shared/components/loading-indicator/loading-indicator.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlaylistService } from './shared/services/create-playlist.service';
import { HorizontalListModule } from '../../shared/modules/horizontal-list/horizontal-list.module';
import { PlaylistComponent } from './playlist.component/playlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@NgModule({
  declarations: [PlaylistComponent, CreateDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingIndicatorModule,
    HorizontalListModule,
  ],
  exports: [PlaylistComponent],
  providers: [CreatePlaylistService],
})
export class PlaylistModule {}
