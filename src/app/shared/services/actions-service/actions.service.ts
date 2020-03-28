import { ExploreRoutingModule } from './../../../explore/explore-routing.module';
import { ActionInterface } from './../../interfaces/action.interface';
import { Injectable } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

export enum MusicType {
  MyPlaylist = 0,
  OtherMusic = 1,
  LibraryMusic = 2
}

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  musicActions: Array<ActionInterface>;
  myPlaylistMusicActions: Array<ActionInterface>;
  otherMusicActions: Array<ActionInterface>;

  constructor() {
    this.musicActions = [
      {
        title: 'Like',
        url: '',
        icon: 'favorite_border'
      },
      {
        title: 'Add to Queue',
        url: '',
        icon: 'queue_music'
      },
      {
        title: 'View Album',
        url: '',
        icon: 'album'
      },
      {
        title: 'View Artist',
        url: '',
        icon: 'account_circle'
      },
      {
        title: 'Report Explicit Content',
        url: '',
        icon: 'explicit'
      },
      {
        title: 'Share',
        url: '',
        icon: 'share'
      }
    ];
    this.myPlaylistMusicActions = [
      {
        title: 'Remove from Playlist',
        url: '',
        icon: 'remove_circle_outline'
      },
      {
        title: 'Add to other Playlist',
        url: '',
        icon: 'playlist_add'
      }
    ];
    this.otherMusicActions = [
      {
        title: 'Add to Playlist',
        url: '',
        icon: 'playlist_add'
      }
    ];
  }

  getActions(musicType: MusicType) {
    const array = [];
    this.musicActions.forEach((item, index) => {
      array.push(item);
    });
    switch (musicType) {
      case 0:
        this.myPlaylistMusicActions.forEach((item, index) => {
          array.splice(1 + index, 0, item);
        });
        break;
      case 1:
        this.otherMusicActions.forEach((item, index) => {
          array.splice(1 + index, 0, item);
        });
        break;
      case 2:
        this.otherMusicActions.forEach((item, index) => {
          array.splice(1 + index, 0, item);
        });
        break;
    }
    return array;
  }
}
