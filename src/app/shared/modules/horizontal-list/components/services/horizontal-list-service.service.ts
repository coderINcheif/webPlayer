import { MusicInterface } from './../../../../interfaces/music.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorizontalListService {
  items: Array<MusicInterface>;
  constructor() {
    this.items = [
      {
        title: 'Test Music',
        artist: {
          name: 'Himanshu Pandey'
        },
        releaseDate: '30 Feb 2020',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      },
      {
        title: 'Test Music',
        artist: {
          name: 'Himanshu Pandey'
        },
        releaseDate: '30 Feb 2020',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      },
      {
        title: 'Test Music',
        artist: {
          name: 'Himanshu Pandey'
        },
        releaseDate: '30 Feb 2020',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      },
      {
        title: 'Test Music',
        artist: {
          name: 'Himanshu Pandey'
        },
        releaseDate: '30 Feb 2020',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      },
      {
        title: 'Test Music',
        artist: {
          name: 'Himanshu Pandey'
        },
        releaseDate: '30 Feb 2020',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      }
    ];
  }
}
