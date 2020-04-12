import { LibraryNavigationInterface } from './../../shared/interfaces/lib-navigation-item.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibNavigationService {
  items: Array<LibraryNavigationInterface>;

  constructor() {
    this.items = [
      {
        title: 'Playlist',
        url: 'playlist',
      },
      {
        title: 'Artists',
        url: 'artist',
      },
      {
        title: 'Album',
        url: 'album',
      },
    ];
  }
}
