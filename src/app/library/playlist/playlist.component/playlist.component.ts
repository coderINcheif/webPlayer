import { OverlayService } from './../../../shared/services/overlay-service/overlay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  createOverlay = false;
  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.overlayStatus$.subscribe((status) => {
      if (status === false) {
        this.createOverlay = status;
      }
    });
  }

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.overlayService.updateOverlayStatus(true);
    this.createOverlay = true;
  }
}
