import { ShowDialogService } from './../shared/services/show-dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  showCreateDialog = false;
  constructor(private showDialogService: ShowDialogService) {}

  ngOnInit() {}

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.showDialogService.updateStatus(true);
  }
}
