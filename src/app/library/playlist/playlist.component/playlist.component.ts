import { OverlayService } from './../../../shared/services/overlay-service/overlay.service';
import { CardType } from 'src/app/shared/enums/card.enum';
import { LibraryPlaylistService } from './services/library-playlist.service';
import { PlaylistInterface } from './../../../shared/interfaces/playlist.interface';
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
  items: Array<PlaylistInterface>;
  cardType: CardType;
  constructor(
    private createPlaylistService: CreatePlaylistService,
    private playlistService: LibraryPlaylistService,
    private overlyService: OverlayService
  ) {}

  ngOnInit() {
    this.items = this.playlistService.getItems();
    this.cardType = this.playlistService.getCardType();
    this.createPlaylistService.refresh$.subscribe((status) => {
      if (status === true) {
        this.items = this.playlistService.getItems();
        this.createPlaylistService.updateRefreshStatus(false);
      }
    });
    this.createPlaylistService.showDialog$.subscribe((status) => {
      this.showCreateDialog = status;
    });
    this.overlyService.overlayStatus$.subscribe((status) => {
      if (status === false) {
        this.showCreateDialog = status;
      }
    });
  }

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.createPlaylistService.updateDialogStatus(true);
  }
}
