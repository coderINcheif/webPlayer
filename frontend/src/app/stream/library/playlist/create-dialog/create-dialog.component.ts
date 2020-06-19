import { Subscription } from 'rxjs';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';
import { dialogTrigger } from './create-dialog.animation';
import { OverlayService } from '../../../shared/services/overlay-service/overlay.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'playlist-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
  animations: [dialogTrigger],
})
export class CreateDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  subs = new Subscription();
  dialogStatus = false;
  constructor(
    private overlayService: OverlayService,
    private createPlaylistService: CreatePlaylistService
  ) {}

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

  ngOnDestroy() {
    this.createPlaylistService.updateDialogStatus(false);
    this.subs.unsubscribe();
  }

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }

  cancel() {
    this.createPlaylistService.updateDialogStatus(false);
  }

  createPlaylist(form: NgForm) {
    const data = JSON.stringify(form.value);
    this.createPlaylistService.createPlaylist(data).subscribe(
      (res) => {
        this.createPlaylistService.addNewPlaylist(res);
      },
      (err) => {}
    );
  }
}
