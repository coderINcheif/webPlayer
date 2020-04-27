import { Router } from '@angular/router';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  showCreateDialog = false;
  constructor(
    private createPlaylistService: CreatePlaylistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createPlaylistService.refresh$.subscribe((status) => {
      this.refresh();
    });
  }

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.createPlaylistService.updateDialogStatus(true);
  }

  refresh() {
    const currentURL = this.router.url;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl(currentURL);
    // this.router.navigate([currentURL], { onSameUrlNavigation: 'reload' });x
    // this.router
    //   .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
    //   .then(() => {
    //   });
  }
}
