import { ShowDialogService } from './../shared/services/show-dialog.service';
import { dialogTrigger } from './create-dialog.animation';
import { OverlayService } from './../../../shared/services/overlay-service/overlay.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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
    private showDialogService: ShowDialogService
  ) {}

  ngOnInit() {
    this.showDialogService.showDialog$.subscribe((status) => {
      this.dialogStatus = status;
      this.overlayService.updateOverlayStatus(status);
    });
    this.overlayService.overlayStatus$.subscribe((status) => {
      this.dialogStatus = status;
    });
  }

  ngOnDestroy() {
    this.showDialogService.updateStatus(false);
  }

  cancel() {
    this.showDialogService.updateStatus(false);
  }
}
