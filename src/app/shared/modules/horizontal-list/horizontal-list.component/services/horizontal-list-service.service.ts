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
  constructor(private testData: TestDataService) {
    this.items = [
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
    ];
  }

  getItems(url: string, count: number) {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(this.testData.getData(url));
    }
    return items;
  }
}
