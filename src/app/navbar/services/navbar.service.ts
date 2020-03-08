import { NavbarItem } from './../shared/interfaces/navbar-item';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  items: Array<NavbarItem>;
  constructor() {
    this.items = [
      {
        title: 'Music',
        icon: 'music_video',
        link: '/music'
      },
      {
        title: 'Explore',
        icon: 'explore',
        link: '/explore'
      },
      {
        title: 'Favorites',
        icon: 'favorite',
        link: '/favorites',
        subitems: [
          { title: 'Songs', link: '/favorites/songs' },
          { title: 'Albums', link: '/favorites/albumn' },
          { title: 'Artist', link: '/favorites/artist' },
          { title: 'Playlists', link: '/favorites/playlists' }
        ]
      }
    ];
  }
}
