import { Subscription } from 'rxjs';
import { OverlayService } from '../../../shared/services/overlay-service/overlay.service';
import { CardType } from 'src/app/stream/shared/enums/card.enum';
import { LibraryPlaylistService } from './services/library-playlist.service';
import { LibraryPlaylistInterface } from '../../../shared/interfaces/playlist.interface';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'library-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit, OnDestroy {
  showCreateDialog = false;
  items: Array<LibraryPlaylistInterface>;
  cardType: CardType;
  subs = new Subscription();
  constructor(
    private createPlaylistService: CreatePlaylistService,
    private playlistService: LibraryPlaylistService,
    private overlyService: OverlayService
  ) {}

  ngOnInit() {
    this.playlistService.getItems().subscribe(
      (res) => {
        this.items = res as Array<LibraryPlaylistInterface>;
      },
      (err) => {}
    );
    this.cardType = this.playlistService.getCardType();
    this.subs.add(
      this.createPlaylistService.newPlaylist$.subscribe((playlist) => {
        this.items.splice(0, 0, playlist);
      })
    );
    this.subs.add(
      this.createPlaylistService.showDialog$.subscribe((status) => {
        this.showCreateDialog = status;
      })
    );
    this.subs.add(
      this.overlyService.overlayStatus$.subscribe((status) => {
        if (status === false) {
          this.showCreateDialog = status;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createPlaylist(event: Event) {
    event.stopPropagation();
    this.createPlaylistService.updateDialogStatus(true);
  }
}
