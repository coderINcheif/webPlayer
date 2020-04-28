import { TestDataService } from './../../../shared/services/test-data.service';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';
import { dialogTrigger } from './create-dialog.animation';
import { OverlayService } from './../../../shared/services/overlay-service/overlay.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'playlist-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
  animations: [dialogTrigger],
})
export class CreateDialogComponent implements OnInit, OnDestroy {
  dialogStatus = false;
  constructor(
    private overlayService: OverlayService,
    private createPlaylistService: CreatePlaylistService
  ) {}

  ngOnInit() {
    this.createPlaylistService.showDialog$.subscribe((status) => {
      this.dialogStatus = status;
      this.overlayService.updateOverlayStatus(status);
    });
    this.overlayService.overlayStatus$.subscribe((status) => {
      this.dialogStatus = status;
    });
  }

  ngOnDestroy() {
    this.createPlaylistService.updateDialogStatus(false);
  }

  cancel() {
    this.createPlaylistService.updateDialogStatus(false);
  }

  createPlaylist(form: NgForm) {
    this.createPlaylistService.createPlaylist(form.value.name);
  }
}
