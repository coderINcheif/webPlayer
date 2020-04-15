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
  // tslint:disable-next-line: no-input-rename
  @Input('status') dialogStatus = false;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.overlayService.updateOverlayStatus(false);
  }

  cancel() {
    this.overlayService.updateOverlayStatus(false);
  }
}
