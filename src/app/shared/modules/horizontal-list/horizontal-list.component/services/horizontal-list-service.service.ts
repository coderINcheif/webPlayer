import { CardType } from './../../../card/card.component/card.component';
import { TestDataService } from './../../../../services/test-data.service';
import { PlaylistInterface } from './../../../../interfaces/playlist.interface';
import { Injectable } from '@angular/core';

export enum ListType {
  Playlist = 'playlist',
  Artist = 'artist',
  Music = 'music',
  MyPlaylist = 'my-playlist',
}

@Injectable({
  providedIn: 'root',
})
export class HorizontalListService {
  items: Array<PlaylistInterface>;
  cardType = {
    playlist: CardType.Playlist,
    music: CardType.Music,
    artist: CardType.Artist,
    'my-playlist': CardType.Playlist,
  };
  constructor(private testData: TestDataService) {}

  getItems(url: string, count: number) {
    const items = [];
    console.log('service called');
    for (let i = 0; i < count; i++) {
      items.push(this.testData.getData(url));
    }
    return items;
  }

  getCardType(url: string) {
    return this.cardType[url];
  }
}
