import { NavbarItem } from '../../shared/interfaces/navbar-item';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  items: Array<NavbarItem>;
  constructor() {
    this.items = [
      {
        title: 'Music',
        icon: 'music_video',
        link: '/music',
      },
      {
        title: 'Explore',
        icon: 'explore',
        link: '/explore',
      },
      {
        title: 'Library',
        icon: 'favorite',
        link: '/library',
        subitems: [
          { title: 'Albums', link: '/library/album' },
          { title: 'Artist', link: '/library/artist' },
          { title: 'Playlists', link: '/library/playlist' },
        ],
      },
    ];
  }
}
