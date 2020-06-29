import { requiredValidator } from './../../../../shared/validators/common.validator';
import { FormErrorHandler } from './../../../../shared/error-handlers/form.handler';
import { Subscription } from 'rxjs';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';
import { dialogTrigger } from './create-dialog.animation';
import { OverlayService } from '../../../shared/services/overlay-service/overlay.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'playlist-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
  animations: [dialogTrigger],
})
export class CreateDialogComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  dialogStatus = false;
  loading = false;
  form: FormGroup;
  constructor(
    private overlayService: OverlayService,
    private createPlaylistService: CreatePlaylistService,
    private formErrorHandler: FormErrorHandler,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', requiredValidator],
    });
  }

  ngOnInit() {
    this.subs.add(
      this.createPlaylistService.showDialog$.subscribe((status) => {
        this.dialogStatus = status;
        this.overlayService.updateOverlayStatus(status);
      })
    );
    this.subs.add(
      this.overlayService.overlayStatus$.subscribe((status) => {
        this.dialogStatus = status;
      })
    );
  }

  get name() {
    return this.form.get('name');
  }

  ngOnDestroy() {
    this.createPlaylistService.updateDialogStatus(false);
    this.subs.unsubscribe();
  }

  cancel() {
    this.createPlaylistService.updateDialogStatus(false);
  }

  createPlaylist() {
    this.loading = true;
    const data = JSON.stringify(this.form.value);
    this.createPlaylistService.createPlaylist(data).subscribe(
      (res) => {
        this.createPlaylistService.addNewPlaylist(res);
        this.createPlaylistService.updateDialogStatus(false);
        this.loading = false;
      },
      (err) => {
        this.formErrorHandler.handleServerErrors(this.form, err);
        this.loading = false;
      }
    );
  }
}
